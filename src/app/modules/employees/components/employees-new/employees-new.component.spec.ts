import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesNewComponent } from './employees-new.component';

describe('EmployeesNewComponent', () => {
  let component: EmployeesNewComponent;
  let fixture: ComponentFixture<EmployeesNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployeesNewComponent]
    });
    fixture = TestBed.createComponent(EmployeesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
