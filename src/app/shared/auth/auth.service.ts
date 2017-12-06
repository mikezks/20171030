import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

    userName: string;
    role: string;

    login(): void {
        this.userName = 'Max';
        this.role = 'NiceGuy';
    }

    logout(): void {
        this.userName = '';
        this.role = '';
    }

}