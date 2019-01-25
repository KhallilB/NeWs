import { Component } from '@angular/core';
import { NewsApiService } from './services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  mArticles: Array<any>;
  mSources: Array<any>;

  constructor(private _news: NewsApiService) {}

  ngOnInit() {
    //Loads Articles
    this._news
      .getArticles()
      .subscribe(data => (this.mArticles = data['articles']));
    //Loads Sources
    this._news
      .getSources()
      .subscribe(data => (this.mSources = data['sources']));
  }

  //Searches for articles based on their id
  searArticles(source) {
    console.log(`Source is: ${source}`);
    this._news
      .getArticlesById(source)
      .subscribe(data => (this.mArticles = data['articles']));
  }
}
