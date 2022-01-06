import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { catchError,tap,map } from "rxjs/operators";
import { course } from "../module/course";

@Injectable()
export class getCourse{

    
  public courses : course[] = [];

    constructor(private apiCaller : HttpClient){ }
    private url = "https://damp-ridge-30585.herokuapp.com/data";
    getCourses(){
        if(this.courses.length == 0){
            
        return this.apiCaller.get(this.url).subscribe((data : any)=>{
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
            console.log("Services me  "+this.courses);
            console.log("Services me  "+data);
            });
        }
        else{
            return 0;
        }
    }

}