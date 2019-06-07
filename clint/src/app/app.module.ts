import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  MatButtonModule,
  MatCardModule,
  MatInputModule,
  MatListModule,
  MatToolbarModule,
  MatSidenavModule,
  MatIconModule,
  MatStepperModule,
  MatTableModule,
  MatSelectModule,
  MatGridListModule,
  MatRadioModule,
  MatFormFieldModule
} from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Page
import { HomeComponent } from './components/home/home.component';
import { CcComponent } from './components/cc/cc.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CarloanComponent } from './components/carloan/carloan.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginComponent } from './components/login/login.component';
import { NewCarComponent } from './components/new-car/new-car.component';
import { CustomerListComponent } from './components/customer-list/customer-list.component';
import { NewCar2Component } from './components/new-car2/new-car2.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CcComponent,
    CarloanComponent,
    LoginComponent,
    NewCarComponent,
    CustomerListComponent,
    NewCar2Component
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireStorageModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatListModule,
    MatRadioModule,
    MatTableModule,
    MatStepperModule,
    MatSidenavModule,
    MatIconModule,
    MatGridListModule,
    MatToolbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
