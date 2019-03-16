// canLoad controla o carregamento do módulo

import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'
import { LoginService } from './login/login.service'

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate{

  constructor(private loginService: LoginService){}

  checkAuthentication(path: string): boolean{
    const loggedin = this.loginService.isLoggedIn();
    if (!loggedin){
      this.loginService.handleLogin(`/${path}`);
    }
    return loggedin;
  }

  canLoad(route: Route):boolean{

    return this.checkAuthentication(route.path);
  }

  canActivate(
    activtedRoute: ActivatedRouteSnapshot,
    routerStateSnapshot:RouterStateSnapshot):boolean{

    return this.checkAuthentication(activtedRoute.routeConfig.path);
  }

}
