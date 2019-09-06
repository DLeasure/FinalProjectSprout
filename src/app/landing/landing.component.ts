import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent implements OnInit {

  constructor() { }
  Rotate() {
    var element = document.getElementById('image');

    if (element.className === "normal") {
      element.className = "rotate";
    }
    else if ( element.className === "rotate") {
      element.className = 'rotate1';
    } else if ( element.className === "rotate1") {
      element.className = 'normal';
    }
  }
  ngOnInit() {
       }
    

}
