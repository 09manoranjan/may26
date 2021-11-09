import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private newsServices:NewsServiceService) { }
  topTechNews:any = [];
  ngOnInit() {
    this.newsServices.topTechNews().subscribe((result)=>{
      //this.techNews = result['articles'];
      result['articles'].forEach(element => {
        if(element['urlToImage'] != null){
          this.topTechNews.push(element);
        }
      });
    })
  }

}
