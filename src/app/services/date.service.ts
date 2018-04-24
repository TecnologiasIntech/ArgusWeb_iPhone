import {Injectable} from '@angular/core';

@Injectable()
export class DateService {

    constructor() {
    }

    static getCurrentDate():number{
        let date = new Date();
        let dateNumber: string;

        dateNumber = date.getFullYear().toString();
        dateNumber += ("0" + (date.getMonth() + 1).toString()).slice(-2);
        dateNumber += ("0" + (date.getDate().toString())).slice(-2);

        return parseInt(dateNumber);
    }

}
