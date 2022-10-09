import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclingDetailsComponent } from './recycling-details.component';

describe('RecyclingDetailsComponent', () => {
  let component: RecyclingDetailsComponent;
  let fixture: ComponentFixture<RecyclingDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecyclingDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclingDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
