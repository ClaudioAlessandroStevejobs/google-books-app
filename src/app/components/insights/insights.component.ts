import { Book } from 'src/app/interfaces/book';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { Writer } from 'src/app/interfaces/writer';
import { BooksService } from 'src/app/services/books.service';
import { WriterService } from 'src/app/services/writer.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
})
export class InsightsComponent {
  constructor(
    private writerService: WriterService,
    private booksService: BooksService
  ) {}
  @ViewChild('barCanvas') barCanvas: ElementRef;
  barChart: Chart;
  writer: Writer;
  fund: number;
  myBooks: Book[];
  divHeight: any;

  async ionViewWillEnter() {;
    this.writer = await this.writerService.getWriter();
    this.fund = this.writer._fund;
    this.myBooks = await this.booksService.getBooksByIds(this.writer._booksIds);
    this.divHeight = {
      height: `${this.myBooks.length * 120}px`,
    };
    this.createBarChart();
  }

  createBarChart() {
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'horizontalBar',
      data: {
        labels: this.myBooks.map(({ _title }) => _title),
        datasets: [
          {
            label: 'Sold Copied: ',
            maxBarThickness: 60,
            data: this.myBooks.map(({ _soldCopies }) => _soldCopies),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255,99,132,1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 2,
          },
        ],
      },
      options: {
        legend: {
          display: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [{ ticks: { beginAtZero: true } }],
          yAxes: [{ ticks: { display: true } }],
        },
      },
    });
  }
}
