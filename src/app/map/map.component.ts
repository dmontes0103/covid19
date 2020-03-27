import { CoronastatisticsService } from './../services/coronastatistics.service';
import { AfterViewInit, Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import name from '../data/data';
import { Popup} from 'leaflet';
import * as L from 'leaflet';
import { element } from 'protractor';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})

export class MapComponent implements OnInit {

  map: any;
  private marker:any;

  cases: number;
  todayCases: number;
  totalRecovered: number;
  deaths: number;
  nDeaths: number;

  constructor(private css: CoronastatisticsService) { }

  ngOnInit(){

  }

  AfterViewInit(){
  }

  ngAfterViewInit(): void {
    this.initCostaRicaMap();
    this.initMarkers();
    this.loadGeneralData();
  }

  initCostaRicaMap():void{

    this.map = L.map('map').setView([9.934739, -84.087502],9);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		  maxZoom: 18,
		  attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
			'<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
		  id: 'mapbox/streets-v11',
		  tileSize: 512,
		  zoomOffset: -1
      }).addTo(this.map);

  }

  initMarkers(){
    name.forEach( element => {
      this.marker = L.marker(element.latlng).addTo(this.map);
      this.marker.bindPopup("<b>" + element.name +  "</b><p>Casos confirmados:"+ element.cases + "</p>").openPopup();
    });
  }

  loadGeneralData(){
    this.css.loadCostaRicaData().subscribe(
      (data) =>{
        //console.log(data);
        this.cases = data["cases"];
        this.todayCases = data["todayCases"];
        this.totalRecovered = data["recovered"];
        this.deaths = data["deaths"];
        this.nDeaths = data["todayDeaths"];
        //this.stats = Object.keys(data).map(e => data[e]);
        //console.log('Data:' + this.stats);
      }
    );
  }

}
