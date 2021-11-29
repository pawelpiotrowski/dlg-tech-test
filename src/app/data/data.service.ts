import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import * as faqJson from '../../assets/data/faqs.json';
import { FaqResponse } from './faq';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  fetchFaq(): Observable<FaqResponse> {
    return of({
      data: faqJson,
    });
  }
}
