import { CoronastatisticsService } from './services/coronastatistics.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MapComponent } from './map/map.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { FooterComponent } from './footer/footer.component';
import { HttpClientModule} from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ErrorHandlingService } from './services/error-handling.service';

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainDashboardComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LeafletModule.forRoot()
  ],
  providers: [CoronastatisticsService,ErrorHandlingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
