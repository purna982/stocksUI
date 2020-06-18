import { Stock } from './../app/stock';
import { Injectable } from "@angular/core";

@Injectable()
export class StockServiceMock {
    d = new Date();
    constructor() { }

    getStockData(): Array<{}> {
        return [
            {
                status: 'up',
                name: 'USE',
                bid: 11,
                ask:12,
                mid: 11,
                eventTime: Date.now()
            }
        ];
      
    }

}