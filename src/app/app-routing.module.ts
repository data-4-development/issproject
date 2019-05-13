import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import { Router } from '@angular/router';
import { MapsComponent } from './maps/maps.component';
import { ElecComponent } from './maps/elec/elec.component';
import { LegislComponent } from './maps/legisl/legisl.component';
import { ElecmunicComponent } from './maps/elecmunic/elecmunic.component';


const routes: Routes = [
  { path:'', component: HomeComponent },
  { path:'charts', component: ChartsComponent },
  { path:'dashboard', component: DashboardComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'maps', component: MapsComponent },
  { path:'maps/elec', component : ElecComponent},
  { path:'maps/legisl', component: LegislComponent},
  { path: 'maps/elecmunic', component: ElecmunicComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
