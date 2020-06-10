import { StockService } from './stock.service';
import { Component, OnInit } from '@angular/core';
import { Stock } from './stock';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';

  stocks : Stock[];

  polling: any;

  constructor(private stockService:StockService) {

  }
  ngOnInit(): void {
    this.pollData();
  }

  getStocks() {
    this.stockService.getStockData().subscribe(s => {
      this.stocks = s;
      console.log(this.stocks);
    } );
  }
  pollData () {
    this.polling = setInterval(() => {
    this.getStocks();
  },10000)

  }
   ngOnDestroy() {
    clearInterval(this.polling);
  }
}
