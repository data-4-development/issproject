import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
@Component({
  selector: 'app-barchart',
  templateUrl: './barchart.component.html',
  styleUrls: ['./barchart.component.css']
})
export class BarchartComponent implements OnInit {

  constructor() { }

  LineChart=[];
  BarChart=[];
  PieChart=[];

  ngOnInit()
  {
     // Line chart:
this.LineChart = new Chart('lineChart', {
  type: 'line',
data: {
 labels: ["Jan", "Feb", "March", "April", "May", "June","July","Aug","Sep","Oct","Nov","Dec"],
 datasets: [{
     label: 'Unemployment rate in tunisia ',
     data: [9,7 , 3, 5, 2, 10,15,16,19,3,1,9],
     fill:false,
     lineTension:0.2,
     backgroundColor:"red",
     borderColor:"red",
     borderWidth: 3
 },
{
  label: 'Unemployment rate in tunisia ',
  data: [2,17 , 13, 5, 12, 10,12,13,15,10,8,11],
  fill:false,
  lineTension:0.2,
  backgroundColor:"green",
  borderColor:"green",
  borderWidth: 2
}]
}, 
options: {
  responsive: true,
 title:{
     text:"Line Chart",
     display:true
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
             beginAtZero:true
         }
     }]
 }
}
});

// Bar chart:
this.BarChart = new Chart('barChart', {
  type: 'bar',
data: {
 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 datasets: [{
     label: 'Number of Votes',
     data: [9,7 , 3, 5, 2, 10],
     backgroundColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 3
 },
 {
  label: 'Number of Votes',
  data: [4,5 , 7, 6, 8, 9],
  backgroundColor: [
      'rgba(255, 99,100, 0.2)',
      'rgba(54, 150, 235, 0.2)',
      'rgba(255, 100, 86, 0.2)',
      'rgba(79, 158, 192, 0.2)',
      'rgba(153, 102, 255, 0.2)',
      'rgba(255, 100, 64, 0.2)'
  ],
  borderColor: [
      'rgba(255,99,132,1)',
      'rgba(54, 162, 235, 1)',
      'rgba(255, 206, 86, 1)',
      'rgba(75, 192, 192, 1)',
      'rgba(153, 102, 255, 1)',
      'rgba(255, 159, 64, 1)'
  ],
  borderWidth: 2
}
]
}, 
options: {
 title:{
     text:"Bar Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

// pie chart:
this.PieChart = new Chart('pieChart', {
  type: 'pie',
data: {
 labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
 datasets: [{
     label: '# of Votes',
     data: [9,7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"pie Chart",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});


  }
}