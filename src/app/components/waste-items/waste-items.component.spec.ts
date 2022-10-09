import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WasteItemsComponent } from './waste-items.component';

describe('WasteItemsComponent', () => {
  let component: WasteItemsComponent;
  let fixture: ComponentFixture<WasteItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WasteItemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WasteItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
