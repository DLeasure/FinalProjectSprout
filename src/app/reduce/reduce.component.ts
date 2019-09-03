import { Component, OnInit } from '@angular/core';
import { EarthService } from '../earth.service';

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
  reduceContent : any;

  constructor(private earthService: EarthService) {
      this.earthService.getReduceArticles().subscribe( res => {
        this.allArticles = res['result'];
        console.log(this.allArticles);
      })
   }

  

  requestArticleDetails (e) {
    this.reduceURL = encodeURIComponent(e.target.value);
    console.log(this.reduceURL);
    let decodeURL = decodeURIComponent(this.reduceURL);
    console.log(decodeURL);
    this.earthService.getArticleDetails(this.reduceURL).subscribe ( res => {
      this.articleDets = res[`${decodeURL}`];
      this.reduceDes = this.articleDets.description;
      this.reduceContent= this.articleDets.content;

      //display reduceContent
      let g = document.getElementById("articleContent");
      let myDiv = document.createElement("div");
      myDiv.innerHTML= this.reduceContent;
      g.appendChild(myDiv);

      console.log(this.reduceContent);
    });
  };
  ngOnInit() {
  }
};