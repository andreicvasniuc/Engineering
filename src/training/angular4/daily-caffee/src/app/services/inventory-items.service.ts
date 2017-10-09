import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
//import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class InventoryItemsService {
    baseUrl: string = 'http://daily.osf-demo.com';
    // add authorization header with jwt token
    headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    options = new RequestOptions({ headers: this.headers });
    userId: number;
    
    constructor(
        private http: Http,
        private authenticationService: AuthenticationService) {

        let loggedInfo = JSON.parse(localStorage.getItem('loggedInfo'));
        this.userId = loggedInfo && loggedInfo.userId;
    }

    getInventoryItem(id: number): Observable<any> {
        const url = `${this.baseUrl}/inventoryItems/${id}`;
        return this.http.get(url, this.options)
            .map(response => response.json());
    }

    getInventoryItemsList(requestURL: string): Observable<any> {
        let urlRequest = `${this.baseUrl}${requestURL}`;
        console.log(urlRequest);

        return this.http.get(urlRequest, this.options)
            .map((response: Response) => response.json());
    }

    search(terms: Observable<string>, requestURL: string) {
        return terms.debounceTime(300)
            .distinctUntilChanged()
            .switchMap(term => this.searchEntries(term, requestURL));
    }

    searchEntries(term: string = '', requestURL: string) {
        let urlRequest = `${this.baseUrl + requestURL}&searchString=${term}`;
        console.log(urlRequest);

        return this.http
            .get(urlRequest, this.options)
            .map(res => res.json());
    }
}