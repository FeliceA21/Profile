import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { HomeComponent } from './home/home.component';
import { PinfoComponent } from './pinfo/pinfo.component';
import { EduComponent } from './edu/edu.component';
import { AwardsComponent } from './awards/awards.component';
import { EmployComponent } from './employ/employ.component';
import { OrgComponent } from './org/org.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PinfoComponent,
    EduComponent,
    AwardsComponent,
    EmployComponent,
    OrgComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
