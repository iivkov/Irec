import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateYardComponent } from './update-yard.component';

describe('UpdateYardComponent', () => {
  let component: UpdateYardComponent;
  let fixture: ComponentFixture<UpdateYardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateYardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateYardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
