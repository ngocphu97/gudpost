import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishnowComponent } from './publishnow.component';

describe('PublishnowComponent', () => {
  let component: PublishnowComponent;
  let fixture: ComponentFixture<PublishnowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PublishnowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PublishnowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
