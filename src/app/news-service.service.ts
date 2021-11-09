import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  constructor(private http:HttpClient) { }

  newsApiUrl = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6eb21bfc96f24e0b97fa9849aa8a4ab5";
  topHeadLines(){ 
    return this.http.get(this.newsApiUrl);
  }
  topTechNews(){
    let techNewUrl = "https://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=6eb21bfc96f24e0b97fa9849aa8a4ab5";
    return this.http.get(techNewUrl);
  }




}
