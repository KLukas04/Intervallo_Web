import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleDownloadBtnComponent } from './apple-download-btn.component';

describe('AppleDownloadBtnComponent', () => {
  let component: AppleDownloadBtnComponent;
  let fixture: ComponentFixture<AppleDownloadBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleDownloadBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleDownloadBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
