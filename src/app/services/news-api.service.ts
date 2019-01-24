import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class NewsApiService {
  apiKey = environment.API_KEY;

  constructor(private _http: HttpClient) {}

  //Gets all english sources
  getSources() {
    return this._http.get(
      "https://newsapi.org/v2/sources?language=en&apiKey=" + this.apiKey
    );
  }

  //Gets all the top headlines in the US
  getArticles() {
    return this._http.get(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + this.apiKey
    );
  }

  //Get articles by individual sources
  getArticlesById(source: String) {
    return this._http.get(
      "https://newsapi.org/v2/top-headlines?sources=" +
        source +
        "&apiKey=" +
        this.apiKey
    );
  }
}
