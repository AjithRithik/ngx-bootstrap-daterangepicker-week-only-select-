import { Component, OnInit } from '@angular/core';
import { BsLocaleService, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { defineLocale } from 'ngx-bootstrap/chronos';
import { enGbLocale } from 'ngx-bootstrap/locale';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myDateValue: Date;
  bsConfig: Partial<BsDatepickerConfig>;

  constructor(private localeService: BsLocaleService) {
    this.bsConfig = Object.assign(
      {},
      {
        containerClass: 'theme-green app',
        selectWeekDateRange: true,
        selectFromOtherMonth: true,
      }
    );
  }

  ngOnInit() {
    defineLocale('en-gb', enGbLocale);
    this.localeService.use('en-gb');
  }

  onDateChange(newDate: Date) {
    console.log(newDate);
  }
}
