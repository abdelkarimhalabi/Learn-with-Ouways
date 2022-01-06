import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { account } from '../module/account';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

   accounts : account[] = []; 
   private url = 'https://damp-ridge-30585.herokuapp.com/socialmediadata';

  constructor(private apiCaller : HttpClient) { }

  ngOnInit(): void {
    this.apiCaller.get(this.url).subscribe((data : any)=>{
      data.forEach((element : any) => {
        let c = new account();
        c.name = element.app;
        c.link = element.plink;
        c.icon = element.icon;
        this.accounts.push(c);
      });
    })
  }

}
