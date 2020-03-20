import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';




@Injectable()
export class FiltersService {
    setFiltersData$: Observable <any>;
    private newFilterValue = new Subject<any>();
    

    constructor() {
        this.setFiltersData$ = this.newFilterValue.asObservable();
    }

setFiltersData(filterValue) {
    console.log(filterValue)
    console.log("mam dane w serwisie")
    this.newFilterValue.next(filterValue)
}
    

}