import { MenuListComponent } from './components/menu-list/menu-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // {path:'', component: LoginFormComponent},
  {path:'signup', component: SignupComponent},
  {path:'login-form', component: LoginFormComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'menu-list',component:MenuListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
