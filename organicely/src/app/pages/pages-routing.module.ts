import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    children: [
      {path: '', redirectTo:'home', pathMatch:'full'},
      {path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule)},
      {path: 'profile', component: ProfileComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PagesRoutingModule { }
