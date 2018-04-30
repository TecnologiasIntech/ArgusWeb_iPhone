import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientZoneComponent } from './client-zone.component';

describe('ClientZoneComponent', () => {
  let component: ClientZoneComponent;
  let fixture: ComponentFixture<ClientZoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientZoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
