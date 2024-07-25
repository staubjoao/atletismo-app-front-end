import { TrainingScheduleFormComponent } from './../training-schedule-form/training-schedule-form.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrainingSchedule } from 'src/app/models/training-schedule-modal';
import { TrainingScheduleService } from 'src/app/services/training-schedule.service';

@Component({
  selector: 'app-training-schedule-list',
  templateUrl: './training-schedule-list.page.html',
  styleUrls: ['./training-schedule-list.page.scss'],
})
export class TrainingScheduleListPage implements OnInit {

  trainingSchedules: TrainingSchedule[] = [];

  constructor(private trainingScheduleService: TrainingScheduleService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.findAllClub();
  }

  findAllClub() {
    this.trainingScheduleService.getAllTrainingSchedule().subscribe(
      (data) => {
        this.trainingSchedules = data;
        console.log(this.trainingSchedules);
      },
      (error) => {
        console.error('Erro ao obter clubes:', error);
      }
    );
  }

  async openTrainingSchedulesRegistrationModal() {
    const modal = await this.modalController.create({
      component: TrainingScheduleFormComponent
    });

    modal.onDidDismiss().then(() => {
      this.findAllClub();
    });

    return await modal.present();
  }

}
