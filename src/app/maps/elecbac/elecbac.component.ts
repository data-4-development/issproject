import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elecbac',
  templateUrl: './elecbac.component.html',
  styleUrls: ['./elecbac.component.css']
})
export class ElecbacComponent implements OnInit {

  constructor() { }

  ngOnInit() {
     var divElement = document.getElementById('viz1557662517791'); 
     var vizElement = divElement.getElementsByTagName('object')[0]; 
     vizElement.style.width = '1000px'; vizElement.style.height = '1027px'; 
     var scriptElement = document.createElement('script'); 
     scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
     vizElement.parentNode.insertBefore(scriptElement, vizElement);               
  }

}
