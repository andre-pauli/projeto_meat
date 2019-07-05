import { CanLoad, Route, Router, RouterLink } from "@angular/router";
import { Injectable } from "@angular/core";
import { LoginService } from './login.service'

@Injectable()
export class LoggedInGuard implements CanLoad {

    constructor(private loginService: LoginService,
        private router: Router) { }

    canLoad(route: Route): boolean {

        const loggedIn = this.loginService.isLoggedIn()

        if (!loggedIn) {
            this.loginService.handleLogin()
        }
        return true;

    }

}