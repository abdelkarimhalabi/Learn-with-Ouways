import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { getCourse } from './services/course.service';
import { YouTubePlayerModule } from "@angular/youtube-player";


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AboutusComponent,
    CoursedetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    YouTubePlayerModule
  ],
  providers: [getCourse],
  bootstrap: [AppComponent]
})
export class AppModule { }
