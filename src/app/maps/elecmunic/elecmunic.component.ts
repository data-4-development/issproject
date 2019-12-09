import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-elecmunic',
  templateUrl: './elecmunic.component.html',
  styleUrls: ['./elecmunic.component.css']
})
export class ElecmunicComponent implements OnInit {

  
  constructor( private sanitizer: DomSanitizer) {
  // javascript: URLs are dangerous if attacker controlled.
  // Angular sanitizes them in data binding, but you can
  // explicitly tell Angular to trust this value:
  this.dangerousUrl = scriptElement;
  this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  
 
  ngOnInit() {
    var divElement = document.getElementById('viz1557663676525');
     var vizElement = divElement.getElementsByTagName('object')[0]; 
     if (divElement.offsetWidth > 800) { vizElement.style.width = '900px'; 
     vizElement.style.height = '1027px'; 
     }
    else if (divElement.offsetWidth > 500) {
     vizElement.style.width = '900px'; 
     vizElement.style.height = '1027px'; 
     } 
    else { 
       vizElement.style.width = '100%'; 
       vizElement.style.height = '1394px'; 
     } 
    
    var scriptElement = document.createElement('script'); 
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js'; 
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  }

}
