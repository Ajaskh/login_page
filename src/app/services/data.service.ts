import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // create a classproperty for holding data from  lgincomponent

  loginUsername:string=""

  constructor() { }
}
