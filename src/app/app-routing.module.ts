import { SignupComponent } from './components/signup/signup.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'', component: LoginFormComponent},
  {path:'signup', component: SignupComponent},
  {path:'login-form', component: LoginFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
