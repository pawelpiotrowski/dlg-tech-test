import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { DataService } from './data/data.service';
import { Faq } from './data/faq';

const dataServiceSpy = jasmine.createSpyObj('DataService', ['fetchFaq']);
const mockedFaq: Faq = {
  id: '6',
  question: 'Test?',
  answer: 'Yes!',
};

dataServiceSpy.fetchFaq.and.returnValue(of({ data: [mockedFaq] }));

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [{ provide: DataService, useValue: dataServiceSpy }],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'dlg-tech-test'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('dlg-tech-test');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.app-title')?.textContent).toContain('FAQ');
  });

  it('should call data service to fetch faqs', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const dataService = TestBed.inject(DataService);

    fixture.detectChanges();

    expect(dataService.fetchFaq).toHaveBeenCalled();
  });

  describe('onFaqDataLoad', () => {
    it('should set components faqs if passed data is valid', () => {
      const fixture = TestBed.createComponent(AppComponent);
      const app = fixture.componentInstance;
      const mockedValidFaqData = { data: [mockedFaq] };
      // starts empty
      expect(app.faqs.length).toEqual(0);

      // if called with no data
      app.onFaqDataLoad({} as any);
      // remains empty
      expect(app.faqs.length).toEqual(0);
      // when called with valid data
      app.onFaqDataLoad(mockedValidFaqData);
      // will set as faqs
      expect(app.faqs.length).toEqual(mockedValidFaqData.data.length);
      expect(app.faqs[0]).toEqual(mockedValidFaqData.data[0]);
    });
  });
});
