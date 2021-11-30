import { Component, OnInit } from '@angular/core';
import { DataService } from './data/data.service';
import { Faq, FaqResponse } from './data/faq';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Have a Question? We Can Help';
  faqs: Faq[] = [];

  constructor(private dataApi: DataService) {}

  ngOnInit(): void {
    this.dataApi.fetchFaq().subscribe(this.onFaqDataLoad.bind(this));
  }

  onFaqDataLoad(dataResp: FaqResponse): void {
    if (dataResp && dataResp.data && dataResp.data.length > 0) {
      this.faqs = [...dataResp.data];
    }
  }
}
