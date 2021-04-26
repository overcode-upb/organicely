import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';


const routes: Routes = [
  { path: "", redirectTo: "pages", pathMatch: "full" },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginModule)
  },
  {
    path: "pages",
    loadChildren: () =>
      import("./pages/pages.module").then(m => m.PagesModule)
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
