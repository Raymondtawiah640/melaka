import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingAnalytics } from './branding-analytics';

describe('BrandingAnalytics', () => {
  let component: BrandingAnalytics;
  let fixture: ComponentFixture<BrandingAnalytics>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrandingAnalytics]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrandingAnalytics);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
