import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalMarketing } from './digital-marketing';

describe('DigitalMarketing', () => {
  let component: DigitalMarketing;
  let fixture: ComponentFixture<DigitalMarketing>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DigitalMarketing]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DigitalMarketing);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
