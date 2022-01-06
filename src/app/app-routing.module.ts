import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';


const routes: Routes = [
  { path: 'courses', component: CourseComponent },
  { path: 'aboutus', component: AboutusComponent },
  { path: 'coursedetails/:id', component: CoursedetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
