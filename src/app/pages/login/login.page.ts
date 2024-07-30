import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private alertController: AlertController
  ) {}

  onLogin() {
    const body = {
      email: this.email,
      password: this.password,
    };
    this.authService.login(body).subscribe(
      (response) => {
        console.log('Login successful', response);
        localStorage.setItem('role', response.role);
        localStorage.setItem('token', response.access_token);
        localStorage.setItem('email', this.email);
        this.navCtrl.navigateForward('/home');
      },
      async (error) => {
        console.error('Login failed', error);
        const alert = await this.alertController.create({
          header: 'Login Falhou',
          message: 'Senha ou email incorretos. Tente Novamente',
          buttons: ['OK'],
        });
        await alert.present();
      }
    );
  }

  goToSignup() {
    this.navCtrl.navigateForward('/sign-up');
  }
}
