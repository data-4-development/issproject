import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var divElement = document.getElementById('viz1557133219596');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '950px';
    vizElement.style.height = '1227px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);     
  }

}
