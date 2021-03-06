import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExperienceComponent } from './experience/experience.component';
// import { ExperienceComponent } from './experience/experience.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { SkillsComponent } from './skills/skills.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent, data: {animation: 'HomePage'} },
  { path: 'experience', component: ExperienceComponent, data: {animation: 'ExperiencePage'} },
  { path: 'education', component: EducationComponent, data: {animation: 'EducationPage'} },
  { path: 'about', component: AboutComponent, data: {animation: 'AboutPage'} },
  { path: 'contact', component: ContactComponent, data: {animation: 'ContactPage'} },
  { path: 'skills', component: SkillsComponent, data: {animation: 'SkillsPage'} },
  { path: 'header', component: HeaderComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
