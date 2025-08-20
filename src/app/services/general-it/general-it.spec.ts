import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralIt } from './general-it';

describe('GeneralIt', () => {
  let component: GeneralIt;
  let fixture: ComponentFixture<GeneralIt>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GeneralIt]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralIt);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
