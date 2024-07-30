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

  constructor(
    private authService: AuthService,
    private clubService: ClubService
  ) {}

  ngOnInit() {
    this.loadUserInfo();
  }

  loadUserInfo() {
    const userEmail = localStorage.getItem('email');
    if (userEmail) {
      this.authService.getUserByEmail(userEmail).subscribe(
        (info: User) => {
          this.userInfo = {
            ...info,
            club: 'Carregando...',
          };

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
