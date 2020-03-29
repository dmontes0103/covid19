
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable()

export class CoronastatisticsService {


  URL_API = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats';
  API_KEY = '';
  CR_API = 'https://coronaviruscr.com/api/reports';

  constructor(private httpClient: HttpClient) {
    environment.production ? this.API_KEY = '' : this.API_KEY = environment.api_tst_key;
    // console.log('Using key:', this.API_KEY);
   }

  loadCostaRicaData(){
    const _params = new HttpParams()
    .set('country', 'Costa Rica')
    const _headers = new HttpHeaders()
    .set('x-rapidapi-host','covid-19-coronavirus-statistics.p.rapidapi.com')
    .set('X-RapidAPI-Key', this.API_KEY);
    return this.httpClient.get(this.URL_API,
      {headers:_headers, params: _params});
  }

  loadProvinceData(){
    const headers = new HttpHeaders()
    .set('Content-Type','application/json');
    return this.httpClient.get(this.CR_API, {headers});
  }

}
