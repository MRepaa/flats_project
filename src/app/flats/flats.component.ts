import { Component, OnInit } from '@angular/core';
import { ServerService, FlatIE } from '../services/server.service'
import { FiltersService } from '../services/filters.service'


@Component({
  selector: 'app-flats',
  templateUrl: './flats.component.html',
  styleUrls: ['./flats.component.css']
})
export class FlatsComponent implements OnInit {

  flats_data: FlatIE;
  filter_market: String = 'market'
  // filter_value: string = 'rynek wtorny'
  public market_value: String
  isDisabled = true;
  

  public constructor(private flatsService: ServerService,
    private filtersService: FiltersService) {
      this.filtersService.setFiltersData$.subscribe((market_value) =>
      {
        this.market_value = market_value;
        this.isDisabled = false;
      })
 
     }

  ngOnInit(): void {
    
    this.getFlats(this.filter_market, this.market_value);
  }

  async getFlats(filter_market, market_value) {
    
    this.isDisabled = true;
  
    
    console.log("filter_value async", this.market_value)
    console.log("filter name async", filter_market)
    
    await this.flatsService.getData(filter_market, this.market_value).subscribe(data => {
      this.flats_data = data;
      this.isDisabled = false;
     
      console.log(this.flats_data);
    })
     
 
  }
}
