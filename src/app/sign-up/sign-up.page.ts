import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})
export class SignUpPage {
  name: string = '';
  email: string = '';
  password: string = '';
  role: string = '';
  clubCode: string = '';

  constructor(private navCtrl: NavController) {}

  onSignup() {
    console.log('Signup with:', {
      name: this.name,
      email: this.email,
      password: this.password,
      role: this.role,
      clubCode: this.clubCode,
    });
    this.navCtrl.navigateForward('/login');
  }

  goToLogin() {
    this.navCtrl.navigateBack('/login');
  }
}
