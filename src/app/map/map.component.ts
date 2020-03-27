import { CoronastatisticsService } from './../services/coronastatistics.service';
import { Component, OnInit } from '@angular/core';
import name from '../data/data';
import * as L from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  private marker: any;

  cases: number;
  todayCases: number;
  totalRecovered: number;
  deaths: number;
  nDeaths: number;
  lastChecked: string

  map: any;
  constructor(private css: CoronastatisticsService) { }

  ngOnInit() {
    this.initCostaRicaMap();
    this.initMarkers();
    this.loadGeneralData();
  }

  private initCostaRicaMap(): void {
    this.map = L.map('map', { center: [9.934739, -84.087502], zoom: 9 });

    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
      {
        maxZoom: 18,
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
          '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
          'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1
      }).addTo(this.map);

  }

  initMarkers() {
    // name.forEach(element => {
    //   this.marker = L.marker(element.latlng).addTo(this.map).bindPopup("<b>" + element.name + "</b><p>Casos confirmados:" + element.cases + "</p>");
    // });
    name.forEach(element => {
      var data = `<div class="card text-center" style="width: 18rem;" ><div class="card-body" >
      <h5 class="card-title"> ${element.name} </h5>
        <p class="card-text">Casos confirmados: ${element.cases} </p>
        </div>
      </div>`
      this.marker = L.marker(element.latlng).addTo(this.map).bindPopup(data);
    });
  }

  loadGeneralData() {
    this.css.loadCostaRicaData().toPromise().then(
      (data) => {
        //console.log(data);
        var date = new Date(data["data"]["lastChecked"]);
        this.lastChecked = date.toISOString().substring(0, 10);
        this.cases = data["data"]["covid19Stats"][0]["confirmed"];
        this.todayCases = data["todayCases"];
        this.totalRecovered = data["data"]["covid19Stats"][0]["recovered"];
        this.deaths = data["data"]["covid19Stats"][0]["deaths"];
        this.nDeaths = data["todayDeaths"];
        // this.stats = Object.keys(data).map(e => data[e]);
        // console.log('Data:' + this.stats);
      }
    )
      .catch(error => console.log(error)
      );
  }

}
