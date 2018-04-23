import {Component, OnInit} from '@angular/core';
import {GuardService} from '../../services/guard.service';
import {Guard} from '../../interfaces/guard';
import {BsModalService} from 'ngx-bootstrap';
import {GuardComponent} from '../../modals/guard/guard.component';
import {Globals} from '../../statics/globals';

@Component({
    selector: 'app-guards',
    templateUrl: './guards.component.html',
    styleUrls: ['./guards.component.scss']
})
export class GuardsComponent implements OnInit {

    guards: Guard[];
    guardsSearched: Guard[];
    guardFoundSearch: boolean = true;
    existGuards: boolean = false;
    isLoading:boolean = false;

    constructor(private _guardService: GuardService,
                private _modalService: BsModalService) {
    }

    ngOnInit() {
        this.isLoading = true;
        this._guardService.getGuards().then((response: Guard[]) => {
            this.isLoading = false;
            this.guards = this.guardsSearched = response;
            this.existGuards = this.guards.length > 0;
        });
    }

    guardSearch(search: string) {
        this.guardsSearched = this.guards.filter((it: Guard) => it.usuarioNombre.toLowerCase().indexOf(search.toLowerCase()) >= 0);
        this.guardFoundSearch = this.guardsSearched.length > 0;
    }

    showGuard(index: number) {
        let modalRef = this._modalService.show(GuardComponent, Object.assign({}, Globals.optionModalLg, {class: 'gray modal-lg'}));
        modalRef.content.guard = this.guards[index];
    }

}
