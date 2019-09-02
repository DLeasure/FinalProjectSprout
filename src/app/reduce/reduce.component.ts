import { Component, OnInit } from '@angular/core';
import { EarthService } from '../earth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.css']
})
export class ReduceComponent implements OnInit {

  allArticles : [];
  reduceDes : string;
  reduceURL : string = ""

  constructor(private earthService: EarthService) { }

  requestReduceArticles () {
    this.earthService.getReduceArticles().subscribe( res => {
      this.allArticles = res.result;
      console.log(this.allArticles);
    })
  }

  requestArticleDetails (e) {
    this.reduceURL = e.target.value;
    console.log(this.reduceURL);
    this.earthService.getArticleDetails(this.reduceURL).subscribe (res => {
      this.reduceDes = res.result.description;
      console.log(this.reduceDes);
    })
  }

  ngOnInit() {
  }


}
