import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentPlanComponent } from './content-plan.component';

describe('ContentPlanComponent', () => {
  let component: ContentPlanComponent;
  let fixture: ComponentFixture<ContentPlanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentPlanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
