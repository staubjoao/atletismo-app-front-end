import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Club } from 'src/app/models/club-modal';
import { ClubService } from 'src/app/services/club.service';

@Component({
  selector: 'app-club-form',
  templateUrl: './club-form.component.html',
  styleUrls: ['./club-form.component.scss'],
})
export class ClubFormComponent  implements OnInit {

  newClub: Club = { name: '' };

  constructor(private modalController: ModalController,
    private clubService: ClubService
  ) { }

  ngOnInit() {}

  dismiss() {
    this.modalController.dismiss();
  }

  registerClub() {
    console.log(this.newClub);
    this.clubService.createClub(this.newClub).subscribe(
      (response) => {
        console.log('Grupo registrado!', response);
        this.dismiss();
      },
      (error) => {
        console.error('Erro ao registrar clube:', error);
      }
    );
  }

}
