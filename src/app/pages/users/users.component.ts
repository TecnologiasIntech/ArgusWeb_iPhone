import {Component, OnInit} from '@angular/core';
import {Globals} from '../../statics/globals';
import {BsModalService} from 'ngx-bootstrap';
import {UserService} from '../../services/user.service';
import {User} from '../../interfaces/user';
import {UserComponent} from '../../modals/user/user.component';
import {UserType} from '../../enums/user-type.enum';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    supervisors: User[];
    coordinators: User[];
    administrators: User[];
    humanResources: User[];

    usersSearched: User[];
    userFoundSearch: boolean = true;
    existUsers: boolean = false;
    isLoading: boolean = false;
    tabs: any = [
        {
            title: 'Sup',
            userType: UserType.SUPERVISOR,
            messageError: 'supervisores'
        },
        {
            title: 'Coord',
            userType: UserType.COORDINATOR,
            messageError: 'coordinadores'
        },
        {
            title: 'R.H.',
            userType: UserType.HUMANRESOURCES,
            messageError: 'R.H'
        },
        {
            title: 'Admin',
            userType: UserType.ADMINISTRATOR,
            messageError: 'administradores'
        },
    ];
    activeTab: any = this.tabs[0];

    constructor(private _userService: UserService,
                private _modalService: BsModalService) {

    }

    ngOnInit() {

        this.isLoading = true;
        this._userService.getUsers().then((users: User[]) => {
            this._userService.getSupervisors().then((supervisors: User[]) => {

                this.isLoading = false;

                this.coordinators = users.filter((user: User) => (user.usuarioTipo == undefined ? false : user.usuarioTipo.toLowerCase() == 'coordinador'));
                this.administrators = users.filter((user: User) => (user.usuarioTipo == undefined ? false : user.usuarioTipo.toLowerCase() == 'administrador'));
                this.humanResources = users.filter((user: User) => (user.usuarioTipo == undefined ? false : user.usuarioTipo.toLowerCase() == 'recursosHumanos'));
                this.supervisors = supervisors.filter((user: User) => (user.usuarioTipo == undefined ? false : user.usuarioTipo.toLowerCase() == 'supervisor'));

                this.usersSearched = this.supervisors;
                this.existUsers = this.supervisors.length > 0;
            });
        });
    }

    userSearch(search: string, userType: number) {
        if (this.existUsers) {
            this.usersSearched = [];

            this.usersSearched = this.getUsersByUserType(userType).filter((it: User) => it.usuarioNombre.toLowerCase().indexOf(search.toLowerCase()) >= 0);

            this.userFoundSearch = this.usersSearched.length > 0;
        }
    }

    getUsersByUserType(userType: number) {
        if (userType == UserType.ADMINISTRATOR) return this.administrators;
        if (userType == UserType.SUPERVISOR) return this.supervisors;
        if (userType == UserType.COORDINATOR) return this.coordinators;
        if (userType == UserType.HUMANRESOURCES) return this.humanResources;
    }

    showUser(index: number, userType: number) {
        let modalRef = this._modalService.show(UserComponent, Object.assign({}, Globals.optionModalLg, {class: 'gray modal-lg'}));
        modalRef.content.user = this.getUsersByUserType(userType)[index];
    }

    changeTab(tab: any) {
        this.activeTab = tab;

        this.usersSearched = this.getUsersByUserType(tab.userType);

        this.existUsers = this.usersSearched.length > 0;
    }

}
