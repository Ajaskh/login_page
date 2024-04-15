import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  //class property

  fname:string=""
  lname:string=""
  age:string=""
  desig:string=""


// create a property for hold username from service

  userName:string=""

  constructor(private homeService:DataService){

    this.userName=this.homeService.loginUsername

  }

  update(){

    // console.log('firstname:-',this.fname);
    // console.log('lastname:-',this.lname);
    // console.log('age:-',this.age);
    // console.log('designation:-',this.desig);

    alert(`firstname:-${this.fname}
    last name ::-${this.lname}
    age:-${this.age}
    designation:-${this.desig}`)
    


  }


}
