import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoriesViewComponent } from './inventories-view.component';

describe('InventoriesViewComponent', () => {
  let component: InventoriesViewComponent;
  let fixture: ComponentFixture<InventoriesViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoriesViewComponent]
    });
    fixture = TestBed.createComponent(InventoriesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
