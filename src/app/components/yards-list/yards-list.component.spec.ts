import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YardsListComponent } from './yards-list.component';

describe('YardsListComponent', () => {
  let component: YardsListComponent;
  let fixture: ComponentFixture<YardsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YardsListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
