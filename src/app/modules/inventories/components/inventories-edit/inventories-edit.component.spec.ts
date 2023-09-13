import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoriesEditComponent } from './inventories-edit.component';

describe('InventoriesEditComponent', () => {
  let component: InventoriesEditComponent;
  let fixture: ComponentFixture<InventoriesEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoriesEditComponent]
    });
    fixture = TestBed.createComponent(InventoriesEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
