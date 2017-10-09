import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from './authentication.service';

@Injectable()
export class VendingProductsService {
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

    getVendingProductsList(type:number, page: number = 1, perPage:number): Promise<any> {

        let urlRequest = `http://daily.osf-demo.com/vendingProduct/stock?perPage=100`;
        //let urlRequest = `http://daily.osf-demo.com/inventoryItems?type=${type}&page=${page}&user_id=${this.userId}&perPage=${perPage}`;
        console.log(urlRequest);

        return this.http.get(urlRequest, this.options)
            .toPromise()
            .then(response => response.json())
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return error;
    }
}