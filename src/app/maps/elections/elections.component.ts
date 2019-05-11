import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elections',
  templateUrl: './elections.component.html',
  styleUrls: ['./elections.component.css']
})
export class ElectionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var divElement = document.getElementById('viz1557357127623');
    var vizElement = divElement.getElementsByTagName('object')[0];
    if (divElement.offsetWidth > 800) {
      vizElement.style.width = '900px';
      vizElement.style.height = '1027px';
    }
    else if (divElement.offsetWidth > 500) {
      vizElement.style.width = '900px'; vizElement.style.height = '1027px';
    } else {
      vizElement.style.width = '100%'; vizElement.style.height = '1394px';
    }
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

}
