import { AuthService } from './services/auth.service';
import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Grupo', url: '/club-list', icon: 'people' },
    { title: 'Modalidade', url: '/event-list', icon: 'paper-plane' },
    { title: 'Cronograma de treino', url: '/training-schedule', icon: 'heart' },
    { title: 'Archived', url: '/folder/archived', icon: 'archive' },
    { title: 'Trash', url: '/folder/trash', icon: 'trash' },
  ];
  // public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  emailLogado = "teste";
  showMenu = true;

  constructor(private router: Router,
    private authService: AuthService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.urlAfterRedirects);
      }
    });

    this.emailLogado = localStorage.getItem('email')!;
  }

  checkRoute(url: string) {
    const noMenuRoutes = ['/login', '/sign-up'];
    this.showMenu = !noMenuRoutes.includes(url);
    console.log(this.showMenu);
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
