import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClubRegistrationModalPage } from './club-registration-modal.page';

describe('ClubRegistrationModalPage', () => {
  let component: ClubRegistrationModalPage;
  let fixture: ComponentFixture<ClubRegistrationModalPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubRegistrationModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
