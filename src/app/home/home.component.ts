import { AuthService } from '../shared/auth/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    constructor(private authService: AuthService) { }

    get userName() {
        return this.authService.userName;
    }

    login() {
        this.authService.login();
    }

    logout() {
        this.authService.logout();
    }

    ngOnInit() { }
}