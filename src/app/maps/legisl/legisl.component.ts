import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-legisl',
  templateUrl: './legisl.component.html',
  styleUrls: ['./legisl.component.css']
})
export class LegislComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var divElement = document.getElementById('viz1557665219771'); 
    var vizElement = divElement.getElementsByTagName('object')[0]; 
    vizElement.style.width = '800px'; 
    vizElement.style.height = '1027px'; 
    var scriptElement = document.createElement('script'); 
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

}
