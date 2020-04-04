import { Data } from "./../models/Covid19";
import { ICanton } from "./../models/Cantones";
import { CoronastatisticsService } from "./../services/coronastatistics.service";
import { Component, OnInit } from "@angular/core";
import { DatePipe } from '@angular/common';

@Component({
  selector: "app-main-dashboard",
  templateUrl: "./main-dashboard.component.html",
  styleUrls: ["./main-dashboard.component.css"],
})
export class MainDashboardComponent implements OnInit {
  title = "COVID19 - Costa Rica";

  cantones: ICanton[] = [];

  constructor(private coronaServ: CoronastatisticsService, public datepipe: DatePipe) {}

  dataDate:string=''

  ngOnInit() {
    this.dataDate = this.getDate();
    console.log(this.dataDate);
    this.initCantonesMarkers(this.getDate());
  }

  initCantonesMarkers(date:string ) {
    this.coronaServ.loadCantonesData().subscribe((Data: ICanton[]) => {
      for (let c of Data) {
        var casos: Number = c[date];
        if (casos > 1) {
          this.cantones.push(c);
          console.log("Canton agregado:", c.canton);
        }
      }
    });
  }

  getDate() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    return this.datepipe.transform(date,'dd/MM/yyyy')
  }
}
