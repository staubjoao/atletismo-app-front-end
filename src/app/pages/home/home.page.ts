import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ClubService } from 'src/app/services/club.service';
import { User } from '../../models/user-model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  userInfo: User & { club: string } = {
    id: 0,
    name: '',
    email: '',
    password: '',
    role: '',
    club: '',
  };
  clubCode: string = '';

  constructor(
    private authService: AuthService,
    private clubService: ClubService
  ) {}

  ngOnInit() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    console.log(this.userInfo);
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
      this.authService.getUserByEmail(userEmail).subscribe(
        (info: User) => {
          this.userInfo = {
            ...info,
            club: 'Carregando...',
          };

          console.log('User info:', this.userInfo);
          if (info.clubId) {
            this.clubService.getClubById(info.clubId.toString()).subscribe(
              (clubInfo) => {
                this.userInfo.club = clubInfo.name || 'Sem clube';
              },
              (error) => {
                this.userInfo.club = 'Erro ao carregar clube';
              }
            );
          } else {
            this.userInfo.club = 'Sem Clube';
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

  updateClub() {
    if (this.clubCode) {
      this.clubService.getClubByCode(this.clubCode).subscribe(
        (clubInfo) => {
          if (clubInfo) {
            const updatedUserData = {
              name: this.userInfo.name,
              email: this.userInfo.email,
              password: this.userInfo.password,
              clubId: clubInfo.id,
              role: this.userInfo.role,
            };

            this.authService.updateUser(updatedUserData).subscribe(
              (updatedUser) => {
                this.userInfo.club = clubInfo.name;
                this.userInfo.clubId = clubInfo.id;
                this.clubCode = '';
                console.log('User updated successfully', updatedUser);
              },
              (error) => {
                console.error('Error updating user', error);
              }
            );
          } else {
            console.error('Club not found');
          }
        },
        (error) => {
          console.error('Error finding club', error);
        }
      );
    } else {
      console.error('Club code is required.');
    }
  }
}
