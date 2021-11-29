import { TestBed } from '@angular/core/testing';
import { DataService } from './data.service';
import { FaqResponse } from './faq';

describe('DataService', () => {
  let service: DataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fetchFaq', () => {
    it('should return observable of faqs data', (done: DoneFn) => {
      const faqObservable = service.fetchFaq();

      expect(typeof faqObservable.subscribe).toBe('function');

      faqObservable.subscribe((result: FaqResponse) => {
        expect(result.data.length).toBeGreaterThan(1);
        done();
      });
    });
  });
});
