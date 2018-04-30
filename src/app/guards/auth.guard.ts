import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AngularFireAuth} from 'angularfire2/auth';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private af: AngularFireAuth) {
    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return new Promise(resolve => {

            this.af.auth.onAuthStateChanged(user => resolve(user != null));

        });
    }
}
