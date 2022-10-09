import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserRecyclingsComponent } from './user-recyclings.component';

describe('UserRecyclingsComponent', () => {
  let component: UserRecyclingsComponent;
  let fixture: ComponentFixture<UserRecyclingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserRecyclingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserRecyclingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
