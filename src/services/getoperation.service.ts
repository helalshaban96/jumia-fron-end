import { Injectable } from '@angular/core';
import { HttpService } from './http.service';

@Injectable({
  providedIn: 'root'
})
export class GetoperationService {

  constructor(private  operationService:HttpService) { }
getcountry(){
  return this.operationService.get("countries")
  
}
 
 

  getcountryvalid(country:string,valid:string){

    return this.operationService.get(`customers/country/${country}/state/${valid}`)

  }
}
