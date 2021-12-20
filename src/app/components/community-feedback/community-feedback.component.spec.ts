import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunityFeedbackComponent } from './community-feedback.component';

describe('CommunityFeedbackComponent', () => {
  let component: CommunityFeedbackComponent;
  let fixture: ComponentFixture<CommunityFeedbackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommunityFeedbackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunityFeedbackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
