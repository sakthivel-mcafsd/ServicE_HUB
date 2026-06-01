import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssignedBookingsComponent } from './my-assigned-bookings.component';

describe('AssignedBookingsComponent', () => {
  let component: AssignedBookingsComponent;
  let fixture: ComponentFixture<AssignedBookingsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AssignedBookingsComponent]
    });

    fixture = TestBed.createComponent(AssignedBookingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});