import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { UserService } from '../../services/user.service';

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
    private userService: UserService,
    private alertController: AlertController
  ) {}

  onLogin() {
    this.userService
      .login({ email: this.email, password: this.password })
      .subscribe(
        (response) => {
          // Handle successful login
          console.log('Login successful', response);
          // Navigate to home or dashboard page
          this.navCtrl.navigateForward('/home');
        },
        async (error) => {
          // Handle login error
          console.error('Login failed', error);
          // Show error message
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
    // Navigate to the signup page
    this.navCtrl.navigateForward('/sign-up');
  }
}
