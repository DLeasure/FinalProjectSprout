import { Component, OnInit } from '@angular/core';
import { EarthService } from '../earth.service';
import { stringify } from 'querystring';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.css']
})
export class ReduceComponent implements OnInit {

  allArticles : [];
  articleDets : {};
  reduceURL : string = "";
  reduceDes : string;

  constructor(private earthService: EarthService) { }

  requestReduceArticles () {
    this.earthService.getReduceArticles().subscribe( res => {
      this.allArticles = res.result;
      console.log(this.allArticles);
    })
  }

  requestArticleDetails (e) {
    this.reduceURL = encodeURIComponent(e.target.value);
    console.log(this.reduceURL);
    let test = decodeURIComponent(this.reduceURL);
    console.log(test);
    this.earthService.getArticleDetails(this.reduceURL).subscribe ( res => {
      this.articleDets = res[`${test}`];
      this.reduceDes = this.articleDets.description;
    });
  };

  ngOnInit() {
  }
};