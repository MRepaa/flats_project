import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
export interface FlatIE {
    //zmienic na moje dane

    renting_or_selling: string;
    city_district: string;
    link: string;
    rooms: string;
    to_negotiate: string;
    area: string;
    flat_title: string
    price: string;
    image: string;
    market: string;
    flat_id: string;
    url_id: string;
  
  }

  const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json', 'X-API-Key': 'QGpXuydCGi1HdVt0H8f9P91wJ4tBoomZ8lD83H3t' }) }

  @Injectable({
    providedIn: 'root'
  })
  export class ServerService {
    constructor(
  
      private httpClient: HttpClient
  
    ) { }




    getData(filter_market, market_value): Observable<FlatIE> {
        //tutaj wstawic moj link
        console.log(`https://x65p0mk18g.execute-api.eu-central-1.amazonaws.com/test/test?filter_market=${filter_market}&market_value=${market_value}`)
        return this.httpClient.get<FlatIE>(`https://x65p0mk18g.execute-api.eu-central-1.amazonaws.com/test/test?filter_market=${filter_market}&market_value=${market_value}`,
        httpOptions);
    
      }
  }