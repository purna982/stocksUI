import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient,HttpHeaders} from '@angular/common/http';
import { Stock } from './stock';
import { Http } from '@angular/http';

@Injectable()
export class StockService {

  private headers: HttpHeaders;

  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({'Content-Type': 'application/json','Access-Control-Allow-Origin': '*'});
  }

  getStockData(): Observable<Stock[]> {
    return this.http.get<Stock[]>('http://localhost:8080/getStocks?t='+ new Date().getTime(), {headers: this.headers});
  }



}
