import { Component, OnInit } from '@angular/core';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
    selector: 'my-account',
    templateUrl: 'template.html'
})

export class MyAccountComponent implements OnInit {
    user: User;

    constructor(private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        this.userService.getUser()
            .then(user => {
                this.user = user;
            });
    }
}