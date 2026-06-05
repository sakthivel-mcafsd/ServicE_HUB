import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserProfile } from '../models/model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  // உங்கள் C# API URL-ஐ இங்கே மாற்றவும்
  private apiUrl = 'https://localhost:5001/api/user'; 

  constructor(private http: HttpClient) { }

  getUserProfile(id: number): Observable<UserProfile> {
    return this.http.get<UserProfile>(`${this.apiUrl}/${id}`);
  }

  updateUserProfile(id: number, user: UserProfile): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, user);
  }
}