import { Data } from "./../models/Covid19";
import { ICanton } from "./../models/Cantones";
import { ProviceObject } from "./../models/CovidProvinces";
import { element } from "protractor";
import { CoronastatisticsService } from "./../services/coronastatistics.service";
import { Component, OnInit } from "@angular/core";
import name from "../data/data";
import * as L from "leaflet";
import * as myProvinces from "../data/provincesData";
import { read } from "fs";
import { ErrorHandlingService } from "../services/error-handling.service";

const papa = require("papaparse");

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {
  private marker: any;
  cases: number;
  totalRecovered: number;
  deaths: number;
  lastChecked: Date;

  currentProv: any;

  map: any;
  base: string[] = myProvinces.provincesData.features;
  markersArray: Array<any> = [];

  provinceData: ProviceObject;

  csv;

  cantones: ICanton[] = [];

  constructor(
    private css: CoronastatisticsService,
    private ehs: ErrorHandlingService
  ) {}

  ngOnInit() {
    this.initMainLayer();
    this.loadGeneralData();
    this.loadProvincesMap();
  }

  initMainLayer() {
    this.map = L.map("map", { center: [9.934739, -84.087502], zoom: 6 });
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        maxZoom: 18,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1
      }
    ).addTo(this.map);
  }

  // showDistricts() {
  //   this.map.remove();
  //   this.initMainLayer();
  //   this.initMarkers();
  // }

  showProvinces() {
    this.map.remove();
    this.initMainLayer();
    this.loadProvincesMap();
  }

  initProvincesMap(pD: ProviceObject): void {
    L.tileLayer(
      // tslint:disable-next-line: max-line-length
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw",
      {
        maxZoom: 18,
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
      }
    ).addTo(this.map);

    let data = "";
    var geojson = L.geoJSON(
      JSON.parse(JSON.stringify(myProvinces.provincesData)),
      {
        onEachFeature: function(feature, layer) {
          layer.on("mouseover", function() {
            this.setStyle({
              color: "red"
            });
          });
          layer.on("mouseout", function(e) {
            geojson.resetStyle(e.target);
          });
          layer.on("click", function() {
            //layer.remove();
            // this.setStyle({
            //     color: 'green'
            // });
          });
          //console.log('Ticos:', pD.data[0].byNationality.costarricans);
          let province: string =
            feature.properties.name === "SAN JOSE"
              ? "sanJose"
              : String(feature.properties.name).toLocaleLowerCase();
          // Access dictionary of provinces and cases using province name
          //console.log(province, pD.data[0].byLocation[province]);
          data = `<div class="info">
        <h4> <b> ${feature.properties.name} </b> </h4>
          <p>Casos confirmados: ${
            pD ? pD.data[0].byLocation[province] : "Undefined"
          } </p>
        </div>`;

          layer.bindPopup(data);
        }
      }
    ).addTo(this.map);
  }

  getProvincia(name: string) {
    for (let p in this.base) {
      const provinceName = this.base[p]["properties"]["name"];
      if (provinceName === name) {
        console.log("Nombre de Provincia:", this.base[p]["properties"]["name"]);
        console.log(this.base[p]);
        return this.base[p];
      }
    }
  }

  initMarkers() {
    let DefaultIcon = L.icon({
      iconUrl: "assets/marker-icon.png",
      shadowUrl: "assets/marker-shadow.png"
    });

    name.forEach(element => {
      const data = `<div class="info">
        <h4> <b> ${element.name} </b> </h4>
          <p>Casos confirmados: ${element.cases} </p>
        </div>`;


      L.Marker.prototype.options.icon = DefaultIcon;
      L.marker(element.latlng)
        .addTo(this.map)
        .bindPopup(data);
    });
    console.log(name[0]["name"]);
  }

  loadGeneralData() {
    this.css.loadCostaRicaData().subscribe(CovidInterface => {
      //console.log("JSON ", JSON.stringify(CovidInterface));
      //console.log("GeneralData with Interface:", CovidInterface.data.covid19Stats[0]);
      this.lastChecked = new Date(
        CovidInterface.data.covid19Stats[0].lastUpdate
      );
      this.cases = CovidInterface.data.covid19Stats[0].confirmed;
      this.totalRecovered = CovidInterface.data.covid19Stats[0].recovered;
      this.deaths = CovidInterface.data.covid19Stats[0].deaths;
      //console.log(CovidInterface)
    });
  }

  onProvinceChanged(value: string) {
    console.log(value);
    const provincia = this.getProvincia(value);
    L.geoJSON(JSON.parse(JSON.stringify(provincia)), {
      onEachFeature(feature, layer) {
        layer.on("mouseover", function() {});
        layer.on("mouseout", function() {
          this.setStyle({
            color: "blue"
          });
        });
        layer.on("click", function() {
          layer.remove();
          // this.setStyle({
          //     color: 'green'
          // });
        });
      }
    }).addTo(this.map);
  }

  loadProvincesMap() {
    this.css.loadProvinceData().subscribe(ProviceObject => {
      this.provinceData = ProviceObject;
      this.initProvincesMap(this.provinceData);
    });
  }
}
