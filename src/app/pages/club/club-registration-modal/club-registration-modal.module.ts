import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClubRegistrationModalPageRoutingModule } from './club-registration-modal-routing.module';

import { ClubRegistrationModalPage } from './club-registration-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClubRegistrationModalPageRoutingModule
  ],
  declarations: [ClubRegistrationModalPage]
})
export class ClubRegistrationModalPageModule {}
