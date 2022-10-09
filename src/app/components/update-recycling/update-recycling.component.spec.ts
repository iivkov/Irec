import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRecyclingComponent } from './update-recycling.component';

describe('UpdateRecyclingComponent', () => {
  let component: UpdateRecyclingComponent;
  let fixture: ComponentFixture<UpdateRecyclingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateRecyclingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateRecyclingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
