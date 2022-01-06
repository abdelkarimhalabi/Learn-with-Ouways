import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { course } from '../module/course';
import { getCourse } from '../services/course.service';
import { DomSanitizer , SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent implements OnInit {

  constructor(private route : ActivatedRoute , private gc : getCourse, _sanitizer: DomSanitizer) {

    this.v =  _sanitizer.bypassSecurityTrustResourceUrl("https://youtu.be/8uIe0qY9qG8");

   }

  courses = this.gc.courses;
  
  myCourse1 = new course();
  v? : SafeResourceUrl ;

  ngOnInit(): void {
      this.route.params.subscribe((params)=>{
      console.log(params);
      let a :number = params['id'];
      console.log(a);
      this.courses.forEach((element:any) => {

        if(element.id == a){
          this.myCourse1.code = element.code;
          this.myCourse1.name = element.name;
          this.myCourse1.description = element.description;
          this.myCourse1.id = element.id;
          this.myCourse1.vUrl = element.vUrl;
        }
      });
      
      /* for (let i= 0,v:number = i+1; i < this.courses.length; i++) {
          if(a == v){
            this.myCourse.code = this.courses[i].code;
            this.myCourse.name = this.courses[i].name;
            this.myCourse.description = this.courses[i].description;
            this.myCourse.vUrl = this.courses[i].vUrl;
            this.myCourse.id = this.courses[i].id;
          }
        console.log("Helloo "+this.myCourse);
      }
      console.log("Helloo "+this.courses.length); */
    })
  }

}
