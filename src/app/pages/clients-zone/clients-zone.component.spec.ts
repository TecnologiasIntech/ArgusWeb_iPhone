import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsZoneComponent } from './clients-zone.component';

describe('ClientsZoneComponent', () => {
  let component: ClientsZoneComponent;
  let fixture: ComponentFixture<ClientsZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientsZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
