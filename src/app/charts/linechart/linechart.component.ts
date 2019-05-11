import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { MatSnackBar } from '@angular/material';
import { NgForm } from '@angular/forms';


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
          backgroundColor: "#FF0000",
          borderColor: "#FF0000",
          borderWidth: 3
        },
        {
          type: 'line',
          label: 'Inflation Rate in Tunisia ',
          data: [2, 17, 13, 5, 12, 10, 12, 13, 15, 10, 8, 11],
          fill: false,
          lineTension: 0.2,
          backgroundColor: "#4169E1",
          borderColor: "#4169E1",
          borderWidth: 3
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



  //  dataset:dtype[];
  //datasets=[
  // new Dataset("haja",[12,2, 13, 15, 2, 10, 12, 14, 16, 10, 14, 11]),
  // new Dataset("inflation",[2, 17, 13, 5, 3, 9, 7, 15, 15, 10, 8, 1])
  //]
  datasets: Datas[] = [
    { id: 0, name: "GDP ", data: [2, 17, 13, 5, 3, 9, 7, 15, 15, 10, 8, 1] },
    { id: 1, name: "inflation rate", data: [12, 5, 7, 15, 13, 19, 9, 5, 4, 7, 14, 1] },
    { id: 2, name: "Poverty ", data: [15, 11, 8, 9, 13, 15, 11, 9, 7, 5, 8, 11]},
    { id: 3, name: "another data ", data: [15, 11, 8, 9, 13, 15, 11, 9, 7, 5, 8, 11]}
  ];

  color:string[]=["#4B0082","#F0E68C","#87CEEB","#4169E1","#FFD700","#9932CC","#00FF00","#40E0D0"];
  adddata(x, y) {
    this.LineChart.data.datasets.push({
      type: x,
      label: this.datasets[y].name,
      data: this.datasets[y].data,
      fill: false,
      lineTension: 0.2,
      backgroundColor: this.color[y],
      borderColor: this.color[y],
      borderWidth: 3,
    });

    this.LineChart.update();

  }



  removedata() {
    this.LineChart.data.datasets.pop();

    this.LineChart.update();

  }

}
export interface Datas {
  id: number;
  name: string;
  data: number[];
}