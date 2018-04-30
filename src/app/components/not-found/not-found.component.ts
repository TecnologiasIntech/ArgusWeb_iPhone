import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'not-found',
    templateUrl: './not-found.component.html',
    styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {

    @Input() title: string = '';
    @Input() message: string = '';

    constructor() {
    }

    ngOnInit() {
    }

}
