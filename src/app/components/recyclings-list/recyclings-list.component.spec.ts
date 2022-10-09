import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclingsListComponent } from './recyclings-list.component';

describe('RecyclingsListComponent', () => {
  let component: RecyclingsListComponent;
  let fixture: ComponentFixture<RecyclingsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecyclingsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclingsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
