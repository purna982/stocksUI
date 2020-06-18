import { TestBed, inject } from '@angular/core/testing';

import { StockService } from './stock.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';

describe('StockService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpModule,
        HttpClientModule ],
      providers: [StockService]
    });
  });

  it('should be created', inject([StockService], (service: StockService) => {
    expect(service).toBeTruthy();
  }));
});
