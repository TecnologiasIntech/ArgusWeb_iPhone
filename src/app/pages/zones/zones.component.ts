import { Component, OnInit } from '@angular/core';
import {BsModalService} from 'ngx-bootstrap';
import {Globals} from '../../statics/globals';
import {Zone} from '../../interfaces/zone';
import {ZoneService} from '../../services/zone.service';
import {ZoneComponent} from '../../modals/zone/zone.component';
import * as _ from "lodash";

@Component({
  selector: 'app-zones',
  templateUrl: './zones.component.html',
  styleUrls: ['./zones.component.scss']
})
export class ZonesComponent implements OnInit {

    zones: Zone[];
    zonesSearched: Zone[];
    zoneFoundSearch: boolean = true;
    existZones: boolean = false;
    isLoading:boolean = false;

    constructor(private _zoneService: ZoneService,
                private _modalService: BsModalService) {
    }

    ngOnInit() {
        this.isLoading = true;
        this._zoneService.getZones().then((response: Zone[]) => {
            this.isLoading = false;
            this.zones = this.zonesSearched = response;
            this.existZones = this.zones.length > 0;
        });
    }

    zoneSearch(search: string) {
        this.zonesSearched = this.zones.filter((it: Zone) => it.zonaNombre.toLowerCase().indexOf(search.toLowerCase()) >= 0);
        this.zoneFoundSearch = this.zonesSearched.length > 0;
    }

    showZone(index: number) {
        let modalRef = this._modalService.show(ZoneComponent, Object.assign({}, Globals.optionModalLg, {class: 'gray modal-lg'}));
        modalRef.content.zone = this.zones[index];
        modalRef.content.zone = _.filter(this.zones, ['zonaNombre', index])[0];
    }

}
