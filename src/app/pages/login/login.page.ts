import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  email: string = '';
  password: string = '';

  constructor(private navCtrl: NavController) {}

  onLogin() {
    if (this.email === 'test@test.com' && this.password === '123456') {
      // Navigate to home or dashboard page
      this.navCtrl.navigateForward('/home');
    } else {
      // Show error message
      alert('Invalid credentials');
    }
  }
}
