import { Injectable } from '@angular/core';
import {ActivationEnd, Router} from '@angular/router';

@Injectable()
export class DataRouteService {

  constructor(private router: Router) { }

    getDataRoute() {
        return this.router.events
            .filter(event => event instanceof ActivationEnd)
            .filter((event: ActivationEnd) => event.snapshot.firstChild === null)
            .map((event: ActivationEnd) => event.snapshot.data);
    }

}
