import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from 'ng5-slider';

@Component({
  selector: 'app-filter-price',
  templateUrl: './filter-price.component.html',
  styleUrls: ['./filter-price.component.css']
})

export class FilterPriceComponent implements OnInit {
  minValue: number = 100000;
  maxValue: number = 400000;
  options: Options = {
    floor: 0,
    ceil: 1000000,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> zl' + value;
        case LabelType.High:
          return '<b>Max price:</b> zl' + value;
        default:
          return 'zl' + value;
      }
    }
  };

  constructor() { }

  ngOnInit(): void {
  }

}
