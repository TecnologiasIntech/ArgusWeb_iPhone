import { TestBed, inject } from '@angular/core/testing';

import { ClientZoneService } from './client-zone.service';

describe('ClientZoneService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ClientZoneService]
    });
  });

  it('should be created', inject([ClientZoneService], (service: ClientZoneService) => {
    expect(service).toBeTruthy();
  }));
});
