import {RouterModule, Routes} from '@angular/router';
import {AppComponent} from '../app.component';
import {NgModule} from '@angular/core';
import {LoginComponent} from '../login/login.component';
import {HomeComponent} from '../home/home.component';
import {HomeGuideComponent} from '../home/home-guide/home-guide.component';
import {AnnouncementComponent} from '../home/announcement/announcement.component';
import {StudentDetailComponent} from '../home/student-detail/student-detail.component';



export const approute: Routes = [
  {path: '', component: AppComponent},
  {path: 'login',  component: LoginComponent},
  {path: 'home',  component: HomeComponent, children: [
      {path: 'homeGuide', component: HomeGuideComponent},
      {path: 'announcement', component: AnnouncementComponent},
      {path: 'studentDetails', component: StudentDetailComponent}
    ]}
];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(approute)
  ],
  exports: [RouterModule]
})

export class AppRoutes {
}
