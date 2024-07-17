import { ClubService } from './../../../services/club.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ClubFormComponent } from '../club-form/club-form.component';

@Component({
  selector: 'app-club-list',
  templateUrl: './club-list.page.html',
  styleUrls: ['./club-list.page.scss'],
})
export class ClubListPage implements OnInit {
  clubs: any[] = [];

  constructor(private clubService: ClubService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.findAllClub();
  }

  findAllClub() {
    this.clubService.getAllClubs().subscribe(
      (data) => {
        this.clubs = data;
        console.log(this.clubs);
      },
      (error) => {
        console.error('Erro ao obter clubes:', error);
      }
    );
  }

  async openClubRegistrationModal() {
    const modal = await this.modalController.create({
      component: ClubFormComponent
    });

    modal.onDidDismiss().then(() => {
      this.findAllClub();
    });

    return await modal.present();
  }

}
