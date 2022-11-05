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

  cantonesA: ICanton[] = [];
  cantonesS: ICanton[] = [];
  cantonesC: ICanton[] = [];
  cantonesH: ICanton[] = [];
  cantonesL: ICanton[] = [];
  cantonesG: ICanton[] = [];
  cantonesP: ICanton[] = [];

  cantonesModal: ICanton[] = [];
  provincia:string;

  constructor(private coronaServ: CoronastatisticsService, public datepipe: DatePipe) {}

  dataDate:string=''

  ngOnInit() {
    this.dataDate = this.getDate();
    console.log(this.dataDate);
    this.initCantonesMarkers(this.getDate());
  }

  initCantonesMarkers(date:string ) {
    this.coronaServ.loadCantonesData().subscribe((Data: ICanton[]) => {
      //console.log(Data);
      for (let c of Data) {
        //console.log(Data)
        var casos: Number = c[date];
        
        console.log(date)
        if (casos >= 1) {
          //console.log(c);
          switch( c.cod_provin ){
            case "1": this.cantonesS.push(c); break;
            case "2": this.cantonesA.push(c); break;
            case "3": this.cantonesC.push(c); break;
            case "4": this.cantonesH.push(c); break;
            case "5": this.cantonesG.push(c); break;
            case "6": this.cantonesP.push(c); break;
            case "7": this.cantonesL.push(c); break;
            default: console.log("Not province related"); break;
          }
          //this.cantones.push(c);
          //console.log("Canton agregado:", c.canton);
        }
      }
    });
  }

  getListaCantones(value): ICanton[]{
    //console.log(value);
    switch(value){
      case "1": return this.cantonesS; break;
      case "2": return this.cantonesA; break;
      case "3": return this.cantonesC; break;
      case "4": return this.cantonesH; break;
      case "5": return this.cantonesG; break;
      case "6": return this.cantonesP; break;
      case "7": return this.cantonesL; break;
      default: console.log(`No existing array for:${ value }`);break;
    }
  }

  getDate() {
    var date = new Date();
    date.setDate(date.getDate() - 1);
    return "08/04/2020"
    return this.datepipe.transform(date,'dd/MM/yyyy')
  }

  showCantones(value,name){
    this.cantonesModal = this.getListaCantones(value);
    this.provincia = name;
  }
}
