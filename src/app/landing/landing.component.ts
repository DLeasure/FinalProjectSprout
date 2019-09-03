import { Component, OnInit } from '@angular/core';
import { InteractiveFlowers } from '../animations/interactive-flowers'


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})


export class LandingComponent implements OnInit {

  constructor() { }
  
  ngOnInit() {
    const canvas = <HTMLCanvasElement>document.getElementById('flower');
const flowers = new InteractiveFlowers(canvas);

const btn = document.getElementById('clearBtn');
btn.addEventListener('click', () => {
  flowers.clearCanvas();
});

  }

}
