import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/profile.service';
import { UserProfile } from '../models/model';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})

export class UserProfileComponent implements OnInit {


  user!: UserProfile;
  isEditing: boolean = false;
  userId: number = 1; // Default User ID (For Example)

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.loadUserProfile();
  }

  loadUserProfile() {
    this.userService.getUserProfile(this.userId||1).subscribe({
      next: (data) => {
        this.user = data;
      },
      error: (err) => console.error('Error fetching user', err)
    });
  }

  toggleEdit() {
    this.isEditing = true;
  }

  cancelEdit() {
    this.isEditing = false;
    this.loadUserProfile(); // Cancel செய்தால் பழைய டேட்டாவை மீண்டும் ஏற்றவும்
  }

  saveProfile() {
    this.userService.updateUserProfile(this.userId, this.user).subscribe({
      next: () => {
        alert('Profile Updated Successfully!');
        this.isEditing = false;
      },
      error: (err) => console.error('Error updating user', err)
    });
  }
}