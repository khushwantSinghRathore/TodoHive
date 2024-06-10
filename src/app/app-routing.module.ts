import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'start',
    pathMatch: 'full',
  },
  {
    path: 'start',
    loadChildren: () =>
      import('./screen/start/start.module').then((m) => m.StartPageModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./screen/signin/signin.module').then((m) => m.SigninPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./screen/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./screen/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./screen/profile/profile.module').then(
        (m) => m.ProfilePageModule
      ),
  },
  {
    path: 'createtask',
    loadChildren: () =>
      import('./screen/createtask/createtask.module').then(
        (m) => m.CreatetaskPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
