import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider'
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ServerService } from './services/server.service';
import { FiltersService } from './services/filters.service'
import { FlatsComponent } from './flats/flats.component'

import { AppComponent } from './app.component';
import { FilterMarketComponent } from './filters/filterMarket/filterMarket.component';
import { FiltersComponent } from './filters/filters.component';
import { FilterPriceComponent } from './filters/filter-price/filter-price.component';
import { FilterSaleTypeComponent } from './filters/filter-sale-type/filter-sale-type.component';
import { FilterAreaComponent } from './filters/filter-area/filter-area.component';
import { FilterRoomsComponent } from './filters/filter-rooms/filter-rooms.component';
import { FilterCityDistrictComponent } from './filters/filter-city-district/filter-city-district.component';

@NgModule({
  declarations: [
    AppComponent,
    FlatsComponent,
    FilterMarketComponent,
    FiltersComponent,
    FilterPriceComponent,
    FilterSaleTypeComponent,
    FilterAreaComponent,
    FilterRoomsComponent,
    FilterCityDistrictComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    Ng5SliderModule
  ],
  providers: [ServerService, FiltersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
