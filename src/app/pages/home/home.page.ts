import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ClubService } from 'src/app/services/club.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userInfo: {
    name: string;
    role: string;
    club: string;
    email: string;
  } = {
    name: '',
    role: '',
    club: '',
    email: '',
  };

  constructor(
    private authService: AuthService,
    private clubService: ClubService
  ) {}

  ngOnInit() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    const userEmail = localStorage.getItem('email');
    console.log('User email', userEmail);
    if (userEmail) {
      this.authService.getUserByEmail(userEmail).subscribe(
        (info) => {
          this.userInfo = {
            name: info.name,
            role: info.role,
            club: 'Loading...', // We'll update this after fetching club info
            email: info.email,
          };

          // If the user has a clubId, fetch the club details
          if (info.clubId) {
            console.log('User clubId', info.clubId);
            this.clubService.getClubById(info.clubId).subscribe(
              (clubInfo) => {
                this.userInfo.club = clubInfo.name || 'Unknown Club';
              },
              (error) => {
                console.error('Error loading club info', error);
                this.userInfo.club = 'Error loading club';
              }
            );
          } else {
            this.userInfo.club = 'Not assigned';
          }
        },
        (error) => {
          console.error('Error loading user info', error);
        }
      );
    } else {
      console.error('User email not found in localStorage');
    }
  }
}
