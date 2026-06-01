import { Component, OnInit } from '@angular/core';
import { ProviderService } from '../../services/provider.service';

@Component({
  selector: 'app-available-bookings',
  templateUrl: './available-bookings.component.html',
  styleUrls: ['./available-bookings.component.css']
})
export class AvailableBookingsComponent implements OnInit {

  bookings: any[] = [];

  constructor(private providerService: ProviderService) {}

  ngOnInit(): void {
    console.log("AvailableBookings Loaded");
    this.loadBookings();
  }

  loadBookings(): void {
    console.log("Calling API 🔥");

    this.providerService.getAvailableBookings().subscribe({
      next: (res: any) => {
        console.log("API Response 👉", res);

        // 🔥 FIX: handle .NET response
        this.bookings = res?.$values || res || [];
      },
      error: (err) => {
        console.error("API Error ❌", err);
      }
    });
  }

  AcceptBooking(id: number): void {
    this.providerService.acceptBooking(id).subscribe({
      next: () => {
        this.loadBookings(); // refresh
      },
      error: (err) => console.error(err)
    });
  }
}