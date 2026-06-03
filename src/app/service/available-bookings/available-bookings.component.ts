import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-available-bookings',
  templateUrl: './available-bookings.component.html',
  styleUrls: ['./available-bookings.component.css']
})
export class AvailableBookingsComponent implements OnInit {

  bookings: any[] = [];
  searchText: string = '';

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    this.loadBookings();
  }

  loadBookings(): void {

    this.providerService.getAvailableBookings().subscribe({
      next: (res: any) => {
        this.bookings = res?.$values || res || [];
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

  AcceptBooking(id: number): void {

    this.providerService.acceptBooking(id).subscribe({
      next: () => {
        this.loadBookings();
      },
      error: (err) => {
        console.error(err);
      }
    });

  }

  filteredBookings() {

    if (!this.searchText) {
      return this.bookings;
    }

    return this.bookings.filter(x =>
      x.service?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      x.customer?.toLowerCase().includes(this.searchText.toLowerCase()) ||
      x.description?.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}