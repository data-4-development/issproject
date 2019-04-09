import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-linechart',
  templateUrl: './linechart.component.html',
  styleUrls: ['./linechart.component.css']
})
export class LinechartComponent implements OnInit {

  constructor() { }

  public LineChart;
  ngOnInit() {

    this.LineChart = new Chart('lineChart', {
      type: 'bar',
      data: {
        labels: ["Jan", "Feb", "March", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [{
          label: 'Unemployment rate in tunisia ',
          data: [9, 7, 3, 5, 2, 10, 15, 16, 19, 3, 1, 9],
          fill: false,
          lineTension: 0.2,
          backgroundColor: [
            'rgba(255, 99,100, 0.2)'
          ],
          borderColor: "red",
          borderWidth: 3
        },
        {
          type: 'line',
          label: 'Unemployment rate in tunisia ',
          data: [2, 17, 13, 5, 12, 10, 12, 13, 15, 10, 8, 11],
          fill: false,
          lineTension: 0.2,
          backgroundColor: "green",
          borderColor: "green",
          borderWidth: 2
        }]
      },
      options: {
        responsive: true,
        title: {
          text: "Line Chart",
          display: true
        },
        hover: {
          mode: 'nearest',
          intersect: true
        },
        tooltips: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          yAxes: [{
            display: true,
            scaleLabel: {
              display: true,
              labelString: '% rate '
            },
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });



  }


  adddata() {
    this.LineChart.data.datasets.push({
      type: 'bar',
      label: 'v rate in tunisia ',
      data: [0, 7, 13, 5, 2, 10, 5, 6, 9, 13, 1, 9],
      fill: false,
      backgroundColor: "red",
      borderColor: "red",
      borderWidth: 3,
    });

    this.LineChart.update();

  }
}