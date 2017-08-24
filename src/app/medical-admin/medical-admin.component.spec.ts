import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalAdminComponent } from './medical-admin.component';

describe('MedicalAdminComponent', () => {
  let component: MedicalAdminComponent;
  let fixture: ComponentFixture<MedicalAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
