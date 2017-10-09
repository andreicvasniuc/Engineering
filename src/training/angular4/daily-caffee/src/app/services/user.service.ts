import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

import 'rxjs/add/operator/toPromise';

import { AuthenticationService } from './authentication.service';
import { User } from '../models/user';

@Injectable()
export class UserService {
    // add authorization header with jwt token
    headers = new Headers({ 'Authorization': 'Bearer ' + this.authenticationService.token });
    options = new RequestOptions({ headers: this.headers });
    
    constructor(
        private router: Router,
        private http: Http,
        private authenticationService: AuthenticationService) {
    }

    // getUsers(): Observable<any> {
    //     // get users from api
    //     return this.http.get('http://daily.osf-demo.com/users?page=1&perPage=12&type=3', this.options)
    //         .map((response: Response) => response.json());
    // }

    // getUserInfo(): Observable<User> {
    //     // get users from api
    //     return this.http.get('http://daily.osf-demo.com/getUserInfo', this.options)
    //         .map((response: Response) => response.json().data);
    // }

    getUser(): Promise<User> {
        return this.http.get('http://daily.osf-demo.com/getUserInfo', this.options)
            .toPromise()
            .then(response => response.json() as User)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}