import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private Httpuser:HttpClient) { }

get(url:string){
  console.log(`${environment.apiurl}/${url}`)
  
  
  return this.Httpuser.get(`${environment.apiurl}/${url}`)
     
    }
 post(url:string){
  return this.Httpuser.post(`${environment.apiurl}/${url}`,"")
         
  }

}