import { TrainingScheduleFormComponent } from './../training-schedule-form/training-schedule-form.component';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrainingSchedule } from 'src/app/models/training-schedule-modal';
import { TrainingScheduleService } from 'src/app/services/training-schedule.service';
import { TrainingScheduleViewComponent } from '../training-schedule-view/training-schedule-view.component';

@Component({
  selector: 'app-training-schedule-list',
  templateUrl: './training-schedule-list.page.html',
  styleUrls: ['./training-schedule-list.page.scss'],
})
export class TrainingScheduleListPage implements OnInit {

  trainingSchedules: TrainingSchedule[] = [];

  days: number[] = [];
  monthYear: string = "";
  datetime: any;

  constructor(private trainingScheduleService: TrainingScheduleService,
    private modalController: ModalController
  ) { }

  ngOnInit() {
    this.findAllClub();
    this.loadDays();
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

  loadDays() {
    const today = new Date();
    const nextMonth = new Date(today.getFullYear(), today.getMonth() + 1, 1);
    const lastDayOfNextMonth = new Date(nextMonth.getFullYear(), nextMonth.getMonth() + 1, 0);

    this.monthYear = `${nextMonth.toLocaleString('default', { month: 'long' })} ${nextMonth.getFullYear()}`;

    for (let day = 1; day <= lastDayOfNextMonth.getDate(); day++) {
      this.days.push(day);
    }
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

  async showTraining() {
    const selectedDateISO = new Date(this.datetime).toISOString().split('T')[0];
    const selectedTraining = this.trainingSchedules.find(training =>
      training.startTime.split('T')[0] === selectedDateISO
    );

    if (selectedTraining) {
      const modal = await this.modalController.create({
        component: TrainingScheduleViewComponent,
        componentProps: {
          training: selectedTraining
        }
      });
      return await modal.present();
    } else {
      // Trate o caso onde não há treino para a data selecionada
      console.log('Nenhum treino encontrado para a data selecionada.');
    }
  }

}
