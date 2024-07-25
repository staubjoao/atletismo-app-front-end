import { ClubService } from './../../../services/club.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EventFormComponent } from '../event-form/event-form.component';
import { Event } from 'src/app/models/event-modal';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.page.html',
  styleUrls: ['./event-list.page.scss'],
})
export class EventListPage implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.findAllClub();
  }

  findAllClub() {
    this.eventService.getAllEvents().subscribe(
      (data) => {
        this.events = data;
        console.log(this.events);
      },
      (error) => {
        console.error('Erro ao obter clubes:', error);
      }
    );
  }

  async openEventRegistrationModal() {
    const modal = await this.modalController.create({
      component: EventFormComponent
    });

    modal.onDidDismiss().then(() => {
      this.findAllClub();
    });

    return await modal.present();
  }

}
