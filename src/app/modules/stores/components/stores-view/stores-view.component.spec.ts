import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresViewComponent } from './stores-view.component';

describe('StoresViewComponent', () => {
  let component: StoresViewComponent;
  let fixture: ComponentFixture<StoresViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoresViewComponent]
    });
    fixture = TestBed.createComponent(StoresViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
