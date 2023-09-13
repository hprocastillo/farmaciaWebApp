import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoriesListItemComponent } from './inventories-list-item.component';

describe('InventoriesListItemComponent', () => {
  let component: InventoriesListItemComponent;
  let fixture: ComponentFixture<InventoriesListItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoriesListItemComponent]
    });
    fixture = TestBed.createComponent(InventoriesListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
