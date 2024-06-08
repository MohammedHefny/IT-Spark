import { Component } from '@angular/core';
import { SharedModule } from '../sharedModule/SharedModule';
import { TranslateService } from '@ngx-translate/core';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SharedModule, BaseChartDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private translateService: TranslateService) {
    this.translateService.setDefaultLang('en');
    this.translateService.use(localStorage.getItem('lang') || 'en');
  }

  public barChartLegend = true;
  public barChartPlugins = [];

  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: ['2006', '2007', '2008', '2009', '2010', '2011', '2012'],
    datasets: [
      { data: [65, 59, 80, 81, 56, 55, 40], label: 'Emplyee A' },
      { data: [28, 48, 40, 19, 86, 27, 90], label: 'Emplyee B' },
    ],
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: false,
  };

  public pieChartOptions: ChartOptions<'pie'> = {
    responsive: false,
  };
  public pieChartLabels = ['Angular', 'TS', 'JS', 'SCSS', 'GIT', 'HTML5'];
  public pieChartDatasets = [
    {
      data: [300, 500, 100, 200, 100],
    },
  ];
  public pieChartLegend = true;
  public pieChartPlugins = [];
}
