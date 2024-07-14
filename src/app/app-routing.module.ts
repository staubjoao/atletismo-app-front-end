import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'folder/Inbox',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'club-list',
    loadChildren: () =>
      import('./pages/club/club-list/club-list.module').then(
        (m) => m.ClubListPageModule
      ),
  },
  {
    path: 'club-registration-modal',
    loadChildren: () =>
      import(
        './pages/club/club-registration-modal/club-registration-modal.module'
      ).then((m) => m.ClubRegistrationModalPageModule),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
