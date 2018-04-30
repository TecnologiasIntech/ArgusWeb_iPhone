import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {Router} from '@angular/router';
import {UsersComponent} from '../users/users.component';
import {AlertService} from '../../services/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    constructor(private af: AngularFireAuth,
                private router: Router,
                private _alertService: AlertService) {
    }

    ngOnInit() {
    }

    signIn(email: string, password: string) {

        this.af.auth.signInWithEmailAndPassword(email, password)
            .then(response => {
                window.location.href = '#/usuarios';
            })
            .catch((error: any) => {
                this._alertService.error('Verifica tu email o contraseña', 'Es posible que esten mal');
            });

    }

}
