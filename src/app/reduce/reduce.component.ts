import { Component, OnInit } from '@angular/core';
import { EarthService } from '../earth.service';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
  styleUrls: ['./reduce.component.css']
})
export class ReduceComponent implements OnInit {

  allArticles : [];
  reduceDes : string;
  reduceURL : string = "http://earth911.com/news/2012/10/03/5-signs-you-might-be-a-recycling-hoarder/ "

  constructor(private earthService: EarthService) { }

  requestReduceArticles () {
    this.earthService.getReduceArticles().subscribe( res => {
      this.allArticles = res.result;
      console.log(this.allArticles);
    })
  }

  requestArticleDetails (reduceURL) {
    this.earthService.getArticleDetails(reduceURL).subscribe (res => {
      this.reduceDes = res.result.description;
      console.log(this.reduceDes);
    })
  }

  ngOnInit() {
  }


}
