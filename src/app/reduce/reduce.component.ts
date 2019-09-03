import { Component, OnInit } from '@angular/core';
import { EarthService } from '../earth.service';
import { stringify } from 'querystring';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.css']
})
export class ReduceComponent implements OnInit {

  allArticles : any;
  articleDets : any;
  reduceURL : string = "";
  reduceDes : string;
  articleContent : string;
  articleShown: boolean = false;

  constructor(private earthService: EarthService, private router: Router) { }

  requestReduceArticles () {
    this.earthService.getReduceArticles().subscribe( (res: any) => {
      this.allArticles = res.result;
    })
  }

  requestArticleDetails (e) {
    this.reduceURL = encodeURIComponent(e.target.value);
    let test = decodeURIComponent(this.reduceURL);
    this.earthService.getArticleDetails(this.reduceURL).subscribe ( (res: any) => {
      this.articleDets = res[`${test}`];
      this.articleContent = this.articleDets.content;
      this.articleShown = true;
      this.reduceDes = this.articleDets.description;
    });
  };

  ngOnInit() {
  }
};