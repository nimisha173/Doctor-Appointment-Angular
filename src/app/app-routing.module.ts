import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministratorComponent } from './administrator/administrator.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserSignupComponent } from './user/user-signup/user-signup.component';
import { UserloginComponent } from './user/userlogin/userlogin.component';
import { UserloginmainComponent } from './userloginmain/userloginmain.component';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'admin',component:AdminloginComponent},
  {path:'administrator',component:AdministratorComponent},
  {path:'appointment',component:AppointmentComponent},
  {path:'user-login',component:UserloginComponent},
  {path:'userloginmain',component:UserloginmainComponent},
  {path:'user-signup',component:UserSignupComponent}
 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
