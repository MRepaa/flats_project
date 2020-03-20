import { Component, OnInit, ViewChild} from '@angular/core';
import { FiltersService } from '../../services/filters.service'

@Component({
  selector: 'app-filterMarket',
  templateUrl: './filterMarket.component.html',
  styleUrls: ['./filterMarket.component.css']
})
export class FilterMarketComponent implements OnInit {
  public market: String
  public constructor(private filtersService: FiltersService) {
    this.filtersService.setFiltersData(this.market)
   }

  ngOnInit(): void {
  }

  

  onChange(newMarket) {
    this.market = newMarket;
    // console.log(this.market);
    this.filtersService.setFiltersData(this.market)
}

}
