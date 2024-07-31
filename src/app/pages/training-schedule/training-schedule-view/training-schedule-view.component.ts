import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TrainingSchedule } from 'src/app/models/training-schedule-modal';

@Component({
  selector: 'app-training-schedule-view',
  templateUrl: './training-schedule-view.component.html',
  styleUrls: ['./training-schedule-view.component.scss'],
})
export class TrainingScheduleViewComponent {

  @Input() training: any;

  constructor(private modalController: ModalController) {}

  dismiss() {
    this.modalController.dismiss();
  }

}
