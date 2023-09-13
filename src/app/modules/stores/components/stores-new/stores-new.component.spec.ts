import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresNewComponent } from './stores-new.component';

describe('StoresNewComponent', () => {
  let component: StoresNewComponent;
  let fixture: ComponentFixture<StoresNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoresNewComponent]
    });
    fixture = TestBed.createComponent(StoresNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
