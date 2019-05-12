import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elec',
  templateUrl: './elec.component.html',
  styleUrls: ['./elec.component.css']
})
export class ElecComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    var divElement = document.getElementById('viz1557656540188'); 

    var vizElement = divElement.getElementsByTagName('object')[0]; 
    vizElement.style.width = '900px'; 
    vizElement.style.height = '1050px'; 
    var scriptElement = document.createElement('script'); scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
    vizElement.parentNode.insertBefore(scriptElement, vizElement);

  }

}
