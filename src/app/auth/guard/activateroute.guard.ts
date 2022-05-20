import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/service/api.service';

@Injectable({
  providedIn: 'root',
})
export class ActivaterouteGuard implements CanActivate {
  constructor(private router: Router, private apiService: ApiService) {}
  isValid = false;
  canActivate() {
    return this.apiService.activateRoutes();
  }
}
