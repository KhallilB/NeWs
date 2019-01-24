import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class NewsApiService {
  apiKey = environment.API_KEY;

  constructor(private _http: HttpClient) {}

  initalSources() {
    return this._http.get(
      "https://newsapi.org/v2/sources?language=en&apiKey=" + this.apiKey
    );
  }
}
