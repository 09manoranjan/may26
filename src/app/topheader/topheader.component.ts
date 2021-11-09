import { Component, OnInit } from '@angular/core';
import { NewsServiceService } from '../news-service.service';
@Component({
  selector: 'app-topheader',
  templateUrl: './topheader.component.html',
  styleUrls: ['./topheader.component.css']
})
export class TopheaderComponent implements OnInit {

  constructor(private newsService:NewsServiceService) { }
  topHeadLines:any = []; 
  ngOnInit() {
    this.newsService.topHeadLines().subscribe((result)=>{
      //this.topHeadLines =  result['articles'];
      result['articles'].forEach(element => {
        if(element['urlToImage'] != null){
          this.topHeadLines.push(element);}
      });
      console.log("result-------------->",this.topHeadLines);
    })
  }

}
