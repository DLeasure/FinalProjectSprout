import { Component, OnInit } from '@angular/core';
import { InteractiveFlowers } from '../animations/interactive-flowers'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

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
