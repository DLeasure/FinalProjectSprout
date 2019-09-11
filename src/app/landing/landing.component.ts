import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent implements OnInit {

  constructor() { }

  Rotate() {
    var element = document.getElementById('image');
    var x = document.getElementById("reduce");
    var a = document.getElementById("reuse");
    var b = document.getElementById("recycle");

    if (element.className === "normal") {
      element.className = "rotate";
      var x = document.getElementById("reduce");
      if (x.style.display === "none") {
        x.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
      } else {
        x.style.display = "none";
        a.style.display = "block";
        b.style.display = "none";
      }
    }
    else if (element.className === "rotate") {
      element.className = 'rotate1';
      var a = document.getElementById("reuse");
      if (x.style.display === "none") {
        a.style.display = "block";
        x.style.display = "none";
        b.style.display = "none";
      } else {
        x.style.display = "none";
        a.style.display = "block";
        b.style.display = "none";
      }
      a.style.display === "block";    
    } else if ( element.className === "rotate1" && element.className ==="rotate1") {
      element.className = 'normal';
      var b = document.getElementById("recycle");
      if (x.style.display === "none") {
        b.style.display = "block";
        a.style.display = "none";
        x.style.display = "none";
      } else {
        x.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
      }
    }
  }
  ngOnInit() {
       }
    

}
