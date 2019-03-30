import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import {AppRoutes} from './services/router.module';
import { AnnouncementComponent } from './home/announcement/announcement.component';
import { HomeGuideComponent } from './home/home-guide/home-guide.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { StudentDetailComponent } from './home/student-detail/student-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    HomeComponent,
    AnnouncementComponent,
    HomeGuideComponent,
    StudentDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutes,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
