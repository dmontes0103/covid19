
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()

export class CoronastatisticsService {


  URL_API = 'http://api.coronastatistics.live/countries/costa%20rica';
  items = [];

  constructor(private httpClient: HttpClient) { }

  loadCostaRicaData(){
    return this.httpClient.get(this.URL_API);
  }

}
