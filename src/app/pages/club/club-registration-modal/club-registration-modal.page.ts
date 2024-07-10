import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Club } from 'src/app/models/club-modal';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-club-registration-modal',
  templateUrl: './club-registration-modal.page.html',
  styleUrls: ['./club-registration-modal.page.scss'],
})
export class ClubRegistrationModalPage {

  newClub: Club = { name: '' };

  constructor(private modalController: ModalController,
    private clubService: ClubService
  ) { }

  dismiss() {
    this.modalController.dismiss();
  }

  registerClub() {
    this.clubService.createClub(this.newClub).subscribe(
      (response) => {
        console.log('Club registered!', response);
        this.dismiss();
      },
      (error) => {
        console.error('Erro ao registrar clube:', error);
      }
    );
  }

}
