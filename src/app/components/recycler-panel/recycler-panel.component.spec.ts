import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecyclerPanelComponent } from './recycler-panel.component';

describe('RecyclerPanelComponent', () => {
  let component: RecyclerPanelComponent;
  let fixture: ComponentFixture<RecyclerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecyclerPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RecyclerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
