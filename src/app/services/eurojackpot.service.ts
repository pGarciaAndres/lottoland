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
        return this._http.get("https://www.lottoland.com/api/drawings/euroJackpot").map(res => res.json());
    }
}