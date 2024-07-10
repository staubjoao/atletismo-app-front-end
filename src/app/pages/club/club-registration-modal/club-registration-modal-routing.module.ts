import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClubRegistrationModalPage } from './club-registration-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ClubRegistrationModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes), ],
  exports: [RouterModule],
})
export class ClubRegistrationModalPageRoutingModule {}
