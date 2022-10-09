import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerPanelComponent } from './consumer-panel.component';

describe('ConsumerPanelComponent', () => {
  let component: ConsumerPanelComponent;
  let fixture: ComponentFixture<ConsumerPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumerPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
