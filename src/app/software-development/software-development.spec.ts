import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareDevelopment } from './software-development';

describe('SoftwareDevelopment', () => {
  let component: SoftwareDevelopment;
  let fixture: ComponentFixture<SoftwareDevelopment>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareDevelopment]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoftwareDevelopment);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
