import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRecyclingComponent } from './add-recycling.component';

describe('AddRecyclingComponent', () => {
  let component: AddRecyclingComponent;
  let fixture: ComponentFixture<AddRecyclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddRecyclingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRecyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
