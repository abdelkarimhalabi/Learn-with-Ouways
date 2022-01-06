import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { course } from './module/course';
import { getCourse } from './services/course.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Learn with Oways';
 
  constructor(private apiCaller : HttpClient){ }

  ngOnInit(): void {
      
  }
}
