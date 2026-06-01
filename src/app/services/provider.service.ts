import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  private baseUrl = 'http://localhost:5047/api/provider';

  constructor(private http: HttpClient) {}

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');

    return new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  }

  getAvailableBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/available`, {
      headers: this.getHeaders()
    });
  }
  ProgressBooking(id:number){
    return this.http.post(`${this.baseUrl}/Progress/${id}`, {}, {
      headers: this.getHeaders()
    });
  }

  acceptBooking(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/accept/${id}`, {}, {
      headers: this.getHeaders()
    });
  }

  getMyBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/my-bookings`, {
      headers: this.getHeaders()
    });
  }
  getAllMyBookings(): Observable<any> {
    return this.http.get(`${this.baseUrl}/GetAllAcceptBooking`, {
      headers: this.getHeaders()
    });
  }
  completeBooking(id: number): Observable<any> {
    return this.http.post(`${this.baseUrl}/complete/${id}`, {}, {
      headers: this.getHeaders()
    });
  }
}