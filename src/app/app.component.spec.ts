import { StockServiceMock } from './../mock/stock.service.mock';
import { StockService } from './stock.service';
import { TestBed, async, fakeAsync } from '@angular/core/testing';

import { AppComponent } from './app.component';

describe('AppComponent', () => {
  
  beforeEach(fakeAsync (() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      providers: [
        { provide: StockService, useClass: StockServiceMock }
    ]
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Facebook stocks');
  }));
});
