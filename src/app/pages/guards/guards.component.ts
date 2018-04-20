import {Component, OnInit} from '@angular/core';
import {GuardService} from '../../services/guard.service';
import {Guard} from '../../interface/guard';
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

    constructor(private _guardService: GuardService,
                private _modalService: BsModalService) {
    }

    ngOnInit() {
        this._guardService.getGuards().then((response: Guard[]) => {
            this.guards = response;
            console.log(this.guards);
        });
    }

    showGuard(index:number){
        let modalRef = this._modalService.show(GuardComponent, Object.assign({}, Globals.optionModalLg, { class: 'gray modal-lg' }))
        modalRef.content.guard = this.guards[index];
    }

}
