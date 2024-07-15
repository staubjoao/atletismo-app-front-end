import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { ClubRegistrationModalPage } from './club-registration-modal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule
  ],
  declarations: [ClubRegistrationModalPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ClubRegistrationModalPageModule {}
