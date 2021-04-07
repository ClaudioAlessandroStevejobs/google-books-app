import { Book } from 'src/app/interfaces/book';
import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Writer } from 'src/app/interfaces/writer';
import { BooksService } from 'src/app/services/books.service';
import { WriterService } from 'src/app/services/writer.service';
import { Chart } from 'chart.js';
@Component({
  selector: 'app-insights',
  templateUrl: './insights.component.html',
  styleUrls: ['./insights.component.scss'],
})
export class InsightsComponent implements OnInit {

  constructor(private writerService: WriterService, 
    private booksService: BooksService) { 
      // this.canvasHeight = `${(this.myBooks.length -1)*30}px`
    }
  @ViewChild('barCanvas') barCanvas: ElementRef;
  barChart: Chart;
  writer: Writer;
  fund: number;
  myBooks: Book[];
  divHeight : any;
  async ngOnInit() {
    // this.canvasHeight = `${(this.myBooks.length -1)*30}px`;
    this.writer = await this.writerService.getWriter()
    this.fund = this.writer._fund
    this.myBooks = await this.booksService.getBooksByIds(this.writer._booksIds);
    this.divHeight = {
      height: `${(this.myBooks.length)* 120}px`
    }
    this.createBarChart()
  }



  createBarChart () {
    // this.engine
    // this.barCanvas.nativeElement.getContext('2d').height = 400
    this.barChart = new Chart(this.barCanvas.nativeElement, {
      type : 'horizontalBar',
      data: {
        // labels: [...this.myBooks.map(({_title}) => _title),...this.myBooks.map(({_title}) => _title)],
        // labels: [this.myBooks.map(({_title}) => _title)[0]],
        labels: this.myBooks.map(({_title}) => _title),
        datasets: [
          {
            label: "Sold Copied: ",
            // barPercentage: 0.4,
            maxBarThickness: 60,
            // barThickness: 50,
            // data: [...this.myBooks.map(({_soldCopies}) => _soldCopies),...this.myBooks.map(({_soldCopies}) => _soldCopies)],
            // data: [this.myBooks.map(({_soldCopies})=> _soldCopies)[0]],
            data: this.myBooks.map(({_soldCopies})=> _soldCopies),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 2
          }
        ]
      },
      options: {
        legend: {
          display: false
        },
        responsive: true,
        
        // aspectRatio: 0.8,
        maintainAspectRatio: false,
        scales: {
          
          // yAxes: [{ ticks: { beginAtZero: true}}],
          xAxes: [{ticks: { beginAtZero: true}}],
          yAxes: [{ticks: { display: true }}]
        }
    }
    });
  }
}
