import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-filter-area',
  templateUrl: './filter-area.component.html',
  styleUrls: ['./filter-area.component.css']
})
export class FilterAreaComponent implements OnInit {

  minValue: number = 20;
  maxValue: number = 200;
  options: Options = {
    floor: 0,
    ceil: 300,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return  '<b>Min area: </b>' + value +  'm2 </b>' ;
        case LabelType.High:
          return '<b>Max area: </b>' + value + 'm2 </b>' ;
        default:
          return  value + 'm2 </b>'
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
