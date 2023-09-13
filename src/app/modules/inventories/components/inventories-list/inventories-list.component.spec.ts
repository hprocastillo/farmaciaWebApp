import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoriesListComponent } from './inventories-list.component';

describe('InventoriesListComponent', () => {
  let component: InventoriesListComponent;
  let fixture: ComponentFixture<InventoriesListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoriesListComponent]
    });
    fixture = TestBed.createComponent(InventoriesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
