import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatCardModule, MatGridListModule, MatSelectModule, MatInputModule, MatFormFieldModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatCheckboxModule } from '@angular/material';
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
import { CarouselComponent } from './home/carousel/carousel.component';
import { MapsComponent } from './maps/maps.component';
import { ElectionsComponent } from './maps/elections/elections.component';
import { ElecComponent } from './maps/elec/elec.component';
import { FooterComponent } from './footer/footer.component';
import { ElecbacComponent } from './maps/elecbac/elecbac.component';
import { ElecmunicComponent } from './maps/elecmunic/elecmunic.component';
import { LegislComponent } from './maps/legisl/legisl.component';
import { from } from 'rxjs';
import { AddpostComponent } from './dashboard/addpost/addpost.component';
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { AboutComponent } from './about/about.component';
import { ValidateService } from './services/validate.service';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { QuillModule } from 'ngx-quill';
import { AuthService } from './services/auth.service';
import{PostService}from'./dashboard/post.service'
import { HttpClientModule } from '@angular/common/http';

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
    ChartstableComponent,
    CarouselComponent,
    MapsComponent,
    ElectionsComponent,
    ElecComponent,
    FooterComponent,
    ElecbacComponent,
    ElecmunicComponent,
    LegislComponent,
    AddpostComponent,
    SidebarComponent,
    AboutComponent,

  ],
  imports: [
    NgbModule,
    MatCardModule,
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
    FormsModule,
    FlashMessagesModule.forRoot(),
    QuillModule,
    HttpClientModule
  ],
  providers: [
    PostService,
    ValidateService,
    AuthService
  ],
  bootstrap: [AppComponent]
    
})
export class AppModule { }
