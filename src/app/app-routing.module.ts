import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminfunctionComponent } from './adminfunction/adminfunction.component';
import { AdministratorComponent } from './administrator/administrator.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'administrator',component:AdministratorComponent},
  {path:'adminfunction',component:AdminfunctionComponent},
  {path:'appointment',component:AppointmentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
