import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private regrouter:Router){



  }


  register(uname:any,password:any){
    
    // console.log(uname.value);
    // console.log(password.value);

    alert(`username:${uname.value},password:${password.value}`)

    this.regrouter.navigateByUrl("home")

    
    

  }
}
