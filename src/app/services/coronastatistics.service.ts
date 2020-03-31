import { ProviceObject } from './../models/CovidProvinces';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { RootObject } from '../models/Covid19';
import { catchError, tap } from 'rxjs/internal/operators';

@Injectable()

export class CoronastatisticsService {

  URL_API_2 = 'http://api.coronastatistics.live/countries/costa%20rica';
  URL_API = 'https://covid-19-coronavirus-statistics.p.rapidapi.com/v1/stats';
  API_KEY = '';
  CR_API = 'https://coronaviruscr.com/api/reports';

  countryData = <RootObject>{ error: true, statusCode: 400, message: '', data: {} };
  provinceData = <ProviceObject>{ data: [] };

  constructor(private httpClient: HttpClient) {
    environment.production ? this.API_KEY = environment.api_tst_key : this.API_KEY = environment.api_tst_key;
  }

  loadCostaRicaData(): Observable<RootObject> {
    const _params = new HttpParams()
      .set('country', 'Costa Rica')

    const _headers = new HttpHeaders()
      .set('x-rapidapi-host', 'covid-19-coronavirus-statistics.p.rapidapi.com')
      .set('X-RapidAPI-Key', this.API_KEY);

    return this.httpClient.get<RootObject>(this.URL_API,{ headers: _headers, params: _params })
      .pipe(
        catchError(
          this.handleError<RootObject>('Country API', this.countryData))
      );
  }

  loadProvinceData(): Observable<ProviceObject> {
    var data = <ProviceObject>{ data: [] };
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json');

    return this.httpClient.get<ProviceObject>(this.CR_API, { headers })
      .pipe(
        catchError(
          this.handleError<ProviceObject>('Province API', this.provinceData))
      );
  }

  loadCostaRicaData_2() {
    return this.httpClient.get(this.URL_API_2);
  }

  loadDistrictsData() {
    return this.httpClient.get('http://geovision.uned.ac.cr/oges/archivos_covid/03_28/03_28_CSV.csv', { responseType: 'text' });
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
  private log(message: string) {
    console.log(message);
  }
}
