import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvertisingPage } from './advertising-page';

describe('AdvertisingPage', () => {
  let component: AdvertisingPage;
  let fixture: ComponentFixture<AdvertisingPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdvertisingPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdvertisingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
