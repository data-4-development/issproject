import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { Router } from '@angular/router';

const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'charts', component: ChartsComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
