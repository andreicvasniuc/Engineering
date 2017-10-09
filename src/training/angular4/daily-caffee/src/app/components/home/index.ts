import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserService } from '../../services/user.service';

@Component({
  selector: 'home',
  templateUrl: 'template.html'
})
export class HomeComponent {
    constructor(
        private router: Router,
        private userService: UserService) { }

    ngOnInit() {
        // get users from secure api end point
        this.userService.getUser()
            .then(user => {
                if (user.is_admin === "0") {
                    this.router.navigate(['/login']);
                } else {
                    localStorage.setItem('loggedInfo', JSON.stringify({ userId: user.id }));
                }
            });
    }
}