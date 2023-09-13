import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresListItemComponent } from './stores-list-item.component';

describe('StoresListItemComponent', () => {
  let component: StoresListItemComponent;
  let fixture: ComponentFixture<StoresListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoresListItemComponent]
    });
    fixture = TestBed.createComponent(StoresListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
