import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresEditComponent } from './stores-edit.component';

describe('StoresEditComponent', () => {
  let component: StoresEditComponent;
  let fixture: ComponentFixture<StoresEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoresEditComponent]
    });
    fixture = TestBed.createComponent(StoresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
