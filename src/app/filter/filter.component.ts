import { element } from 'protractor';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import data from './progs.json';
import { FormControl } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { combineLatest } from 'rxjs';import {MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import {GetoperationService} from'../../services/getoperation.service'
import { Console } from 'node:console';

interface mobiledetails { 
id:string
name:string 
phone:string
country:string
state:boolean 
}  
interface  country {

  id:string
  name:string 


}
@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  finalout:mobiledetails[]=[]
  validvalue:string =""
  countryvalue:string=""
  page:string =""
  valu: any
  arrayfield:country[]=[]
   
  constructor(private operation: GetoperationService ) { }
  ngOnInit(): void {

    this.filterdata();

    this.operation.getcountry().subscribe((res:any) =>res.forEach((element:any )=>{
      let temp:country={id:"",name:""};
      temp.id=element.id
      temp.name=element.name
      this.arrayfield.push(temp)  
    }


    ));
    
  
  }

  filterdata() {
    if((this.validvalue==="")&&(this.countryvalue==="")) 
    {
      this.operation.getcountryvalid("-1","-1").subscribe(res => this.finalout = res as mobiledetails [])
    
    
    }
    
    
    
    else{
    
    
      if((this.validvalue==="")&&(this.countryvalue!=="")) 
    
      {
    
            this.operation.getcountryvalid(this.countryvalue,"-1").subscribe(res => this.finalout = res as mobiledetails [])
      
      }
      else{
console.log("dsfsdfsd")
console.log(this.validvalue)
console.log(this.countryvalue)
    this.operation.getcountryvalid(this.countryvalue,this.validvalue).subscribe(res =>

       this.finalout = res as mobiledetails[] )

  

}

}



}}

