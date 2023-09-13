import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleButtonComponent } from './module-button.component';

describe('ModuleButtonComponent', () => {
  let component: ModuleButtonComponent;
  let fixture: ComponentFixture<ModuleButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModuleButtonComponent]
    });
    fixture = TestBed.createComponent(ModuleButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
