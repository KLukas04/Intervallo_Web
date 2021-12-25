import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutzungsbedingungenComponent } from './nutzungsbedingungen.component';

describe('NutzungsbedingungenComponent', () => {
  let component: NutzungsbedingungenComponent;
  let fixture: ComponentFixture<NutzungsbedingungenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NutzungsbedingungenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NutzungsbedingungenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
