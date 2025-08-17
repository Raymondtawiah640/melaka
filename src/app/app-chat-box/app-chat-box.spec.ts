import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChatBox } from './app-chat-box';

describe('AppChatBox', () => {
  let component: AppChatBox;
  let fixture: ComponentFixture<AppChatBox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppChatBox]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppChatBox);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
