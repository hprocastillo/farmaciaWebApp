import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoriesNewComponent } from './inventories-new.component';

describe('InventoriesNewComponent', () => {
  let component: InventoriesNewComponent;
  let fixture: ComponentFixture<InventoriesNewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoriesNewComponent]
    });
    fixture = TestBed.createComponent(InventoriesNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
