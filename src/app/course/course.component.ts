import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { course } from '../module/course';
import { getCourse } from '../services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  courses : course[] =[];

  constructor(private apiCaller : HttpClient , private gc : getCourse) { }

  ngOnInit(): void {
    this.gc.getCourses();
    this.apiCaller.get("https://damp-ridge-30585.herokuapp.com/data").subscribe((data : any)=>{
      data.forEach((element: any) => {
        let c = new course();
        c.id = element.id;
        c.code = element.course_code;
        c.name = element.course_name;
        c.description = element.course_description;
        c.vUrl = element.video_url;
        c.imgUrl = element.imgUrl;
        this.courses.push(c);
      });
      console.log(this.courses);
      console.log(data);
      })

  }

}


