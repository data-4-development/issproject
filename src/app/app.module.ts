import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
<<<<<<< HEAD
import { MatToolbarModule, MatSelectModule,  MatInputModule, MatFormFieldModule , MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCheckboxModule } from '@angular/material';
=======
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule } from '@angular/material';
>>>>>>> 5708c38fe73c744f136c818e1b9920d9b8b8e60d
import { HomeComponent } from './home/home.component';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { BarchartComponent } from './charts/barchart/barchart.component';
import { LinechartComponent } from './charts/linechart/linechart.component';
import { PiechartComponent } from './charts/piechart/piechart.component';
import { ChartstableComponent } from './charts/chartstable/chartstable.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChartsComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    BarchartComponent,
    LinechartComponent,
    PiechartComponent,
    ChartstableComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatSelectModule,
    MatButtonModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    ReactiveFormsModule,
<<<<<<< HEAD
    FormsModule,
    
    
=======
    
     
    FormsModule
>>>>>>> 5708c38fe73c744f136c818e1b9920d9b8b8e60d
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
