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
    { title: 'Home', url: '/home', icon: 'home', roles: ['COACH', 'ATHLETE'] },
    { title: 'Grupo', url: '/club-list', icon: 'people', roles: ['COACH'] },
    { title: 'Modalidade', url: '/event-list', icon: 'flame', roles: ['COACH'] },
    { title: 'Cronograma de treino', url: '/training-schedule', icon: 'calendar', roles: ['COACH', 'ATHLETE'] },
    { title: 'Atletas', url: '/list-users', icon: 'person', roles: ['COACH'] },
  ];

  emailLogado = '';
  showMenu = true;
  userRole = '';

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.checkRoute(event.urlAfterRedirects);
      }
    });

    this.emailLogado = localStorage.getItem('email')!;
    this.userRole = localStorage.getItem('role')!;
  }

  getFilteredPages() {
    return this.appPages.filter(page => page.roles.includes(this.userRole));
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
