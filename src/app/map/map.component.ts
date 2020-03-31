import { element } from 'protractor';
import { CoronastatisticsService } from "./../services/coronastatistics.service";
import { Component, OnInit } from "@angular/core";
import name from "../data/data";
import * as L from "leaflet";
import * as myProvinces from "../data/provincesData";
import { read } from "fs";

const papa = require('papaparse');

@Component({
  selector: "app-map",
  templateUrl: "./map.component.html",
  styleUrls: ["./map.component.css"]
})
export class MapComponent implements OnInit {

  private marker: any;
  cases: number;
  todayCases: number;
  totalRecovered: number;
  deaths: number;
  nDeaths: number;
  lastChecked: string;

  map: any;
  base: string[] = myProvinces.provincesData.features;

  markersFlag: false
  public markersArray: Array<any> = [];

  provinceData:any;

  csv;

  constructor(private css: CoronastatisticsService) {}

  ngOnInit() {

    // this.css.loadDistrictsData().subscribe(
    //   (response) =>{
    //     this.csv = response;
    //   var data = papa.parse(this.csv,{header: true});
    //   console.log('Data in csv:',data);
    //  }
    // );


    // this.css.loadCostaRicaData_2().subscribe(
    //   (data) => {
    //   console.log("2 API:", data);
    //   }
    // );

    this.initMainLayer();
    this.loadGeneralData();
  }

  initMainLayer(){
    this.map = L.map("map", { center: [9.934739, -84.087502], zoom: 9 });
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

  showDistricts(){
    this.map.remove();
    this.initMainLayer();
    this.initMarkers();
  }

  showProvinces(){
    this.map.remove();
    this.initMainLayer();
    this.loadCantonesMap();
  }

  initCantonesMap(pD:any): void {
    L.tileLayer(
      // tslint:disable-next-line: max-line-length
      'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
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

    let data = '';
    var geojson = L.geoJSON(JSON.parse(JSON.stringify(myProvinces.provincesData)), {

      onEachFeature:function(feature, layer) {

        layer.on("mouseover", function() {
          this.setStyle({
            color: 'red'
          });
        });
        layer.on('mouseout', function(e){
          geojson.resetStyle(e.target);
        });
        layer.on("click", function() {
          //layer.remove();
          // this.setStyle({
          //     color: 'green'
          // });
        });

        let province:string = feature.properties.name === "SAN JOSE" ? "sanJose" : String(feature.properties.name).toLocaleLowerCase();
        // Access dictionary of provinces and cases using province name

        data = `<div class="info">
        <h4> <b> ${ feature.properties.name } </b> </h4>
          <p>Casos confirmados: ${ pD["data"][0]["byLocation"][province]}</p>
        </div>`;

        layer.bindPopup(data);
      }
    }
    ).addTo(this.map)
  }

  getProvincia(name: string) {
    for (let p in this.base) {
      const provinceName = this.base[p]["properties"]["name"];
      if ( provinceName === name) {
        console.log("Nombre de Provincia:",this.base[p]["properties"]["name"]);
        console.log(this.base[p]);
        return this.base[p];
      }
    }
  }

  initMarkers() {
  let DefaultIcon = L.icon({
      iconUrl: 'assets/marker-icon.png',
      shadowUrl: 'assets/marker-shadow.png'
  });

    name.forEach(element => {
      // const data = `<div class="card text-center" style="width: 18rem;" ><div class="card-body" >
      //  <h5 class="card-title"> ${element.name} </h5>
      //    <p class="card-text">Casos confirmados: ${element.cases} </p>
      //    </div>
      //  </div>`;

      const data =
       `<div class="info">
        <h4> <b> ${element.name} </b> </h4>
          <p>Casos confirmados: ${ element.cases} </p>
        </div>`

      L.Marker.prototype.options.icon = DefaultIcon;
      const newMarker = L.marker(element.latlng).addTo(this.map).bindPopup(data);
    });
  }

  loadGeneralData() {
    this.css
      .loadCostaRicaData()
      .toPromise()
      .then(data => {
        console.log("GeneralData:",data);
        const date = new Date(data["data"]["lastChecked"]);
        this.lastChecked = date.toISOString().substring(0, 10);
        this.cases = data["data"]["covid19Stats"][0]["confirmed"];
        this.todayCases = data["todayCases"];
        this.totalRecovered = data["data"]["covid19Stats"][0]["recovered"];
        this.deaths = data["data"]["covid19Stats"][0]["deaths"];
        this.nDeaths = data["todayDeaths"];
        // this.stats = Object.keys(data).map(e => data[e]);
        // console.log('Data:' + this.stats);
      })
      .catch(error => console.log(error));
  }

  onProvinceChanged(value: string) {

    console.log(value);
    const provincia = this.getProvincia(value);
    L.geoJSON(JSON.parse(JSON.stringify(provincia)), {
      onEachFeature(feature, layer) {
        layer.on('mouseover', function(){

        });
        layer.on('mouseout', function() {
          this.setStyle({
            color: "blue"
          });
        });
        layer.on('click', function() {
          layer.remove();
          // this.setStyle({
          //     color: 'green'
          // });
        });
      }
    }).addTo(this.map);

  }

  loadCantonesMap(){
    // this.css.load().subscribe(data => {
    //   // this.provinceData = data["data"][0]["byLocation"];
    //   // console.log(this.provinceData);
    //   // // for (const p in dataByLoc) {
    //   // //   this.setProvinceCases(p.toUpperCase(), dataByLoc[p])
    //   // // };
    //   return data["data"][0]["byLocation"];
    // });
    this.css.loadProvinceData().subscribe(
      ( data ) => {
      this.provinceData = data;
      this.initCantonesMap(this.provinceData);
      }
    );
  }
}
