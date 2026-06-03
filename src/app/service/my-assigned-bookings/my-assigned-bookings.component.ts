import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-my-assigned-bookings',
  templateUrl: './my-assigned-bookings.component.html',
  styleUrls: ['./my-assigned-bookings.component.css']
})
export class AssignedBookingsComponent implements OnInit {

  bookings: any[] = [];
  selectedFilter: string = 'All';

  constructor(private providerService: ProviderService) { }

  ngOnInit(): void {
    this.loadMyBookings();
  }

  loadMyBookings(): void {
    this.providerService.getAllMyBookings().subscribe({
      next: (res: any) => {
        this.bookings = res?.$values || res || [];
        console.log(this.bookings)
      },
      error: (err) => console.error(err)
    });
  }

  getFilteredBookings() {
    if (this.selectedFilter === 'All') {
      return this.bookings;
    }

    return this.bookings.filter(
      x => x.status === this.selectedFilter
    );
  }

  InProgressBooking(id: number): void {
    this.providerService.ProgressBooking(id).subscribe({
      next: () => this.loadMyBookings()
    });
  }

  completeBooking(id: number): void {
    this.providerService.completeBooking(id).subscribe({
      next: () => this.loadMyBookings()
    });
  }

  callPhone(phone: string) {
    window.location.href = `tel:${phone}`;
  }

  getCount(status: string): number {
    return this.bookings.filter(x => x.status === status).length;
  }
  searchText: string = '';

filteredBookings() {

  let data = this.bookings;

  if (this.selectedFilter !== 'All') {
    data = data.filter(x => x.status === this.selectedFilter);
  }

  if (this.searchText.trim()) {

    data = data.filter(x =>
      x.service?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      x.customer?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      x.description?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  return data;
}
}