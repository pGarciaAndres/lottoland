// Import AngularJs Injectable module.
import { Injectable } from '@angular/core';

// Import components.
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

// Object injectable with DI.
@Injectable()
export class EuroJackpotService {
    constructor(private _http: Http) {}

    getPosts() {
        // Get method to load EuroJackpot data.
        return this._http.get("https://www.lottoland.com/api/drawings/euroJackpot", {headers: this.getHeaders()}).map(res => res.json());
    }

    private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Access-Control-Allow-Origin', '*');
    return headers;
  }
}