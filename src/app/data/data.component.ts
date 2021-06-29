import { Component, Input, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { faTimes } from '@fortawesome/free-solid-svg-icons';import { NgModule } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
interface mobiledetails { 
  id:string
  name:string 
  phone:string
  country:string
  state:boolean 
  } 
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {
  @Input() mobiledetails: mobiledetails[]=[];
 pageindex=0
onchangepage(pe:PageEvent){
this.pageindex=pe.pageIndex
console.log(pe.pageIndex)
}
  constructor() { }
  ngOnInit(): void {
    console.log(this.pageindex)
  }
 tempid:boolean=true;
 tempidphone:boolean=true;
 tempidname:boolean=true;
 tempidcountry:boolean=true;
 tempidstate:boolean=true;
 pgIndex:number=0
pagesize=(this.mobiledetails.length)
sortbyid(){
console.log(this.tempid)
  if (this.tempid ===false ) {

    this.mobiledetails.sort((a: any, b: any) => (+(a.id) > +(b.id)) ? 1 : -1)
    this.tempid=true;


  }
  else  {
    this.mobiledetails.sort((a: any, b: any) => (+(a.id) > +(b.id)) ? -1 : 1)
    this.tempid=false;
  }

}

sortbystate(){
    if (this.tempidstate ===false ) {
  
      this.mobiledetails.sort((a: any, b: any) => (+(a.state) > +(b.state)) ? 1 : -1)
      this.tempidstate=true;
  
  
    }
    else  {
      this.mobiledetails.sort((a: any, b: any) => (+(a.state) > +(b.state)) ? -1 : 1)
      this.tempidstate=false;
  
  
    }
  
  }



sortbyphone(){
    if (this.tempidphone ===false ) {
  
      this.mobiledetails.sort((a: any, b: any) => (  +(a.phone.substring(1, 4)) > +(b.phone.substring(1, 4))) ? 1 : -1)
      this.tempidphone=true;

  
    }
    else  {
      this.mobiledetails.sort((a: any, b: any) => (+(a.phone.substring(1, 4)) > +(b.phone.substring(1, 4))) ? -1 : 1)
      this.tempidphone=false;
  
  
    }
  
  }

  sortbyname(){
    console.log(this.tempidname)
    if (this.tempidname ===false ) {
  
      this.mobiledetails.sort((a: any, b: any) => ((a.name.toLowerCase()) > (b.name.toLowerCase())) ? 1 : -1  )
      
      this.tempidname=true;
  
  
    }
    else  {
      this.mobiledetails.sort((a: any, b: any) => ((a.name.toLowerCase()) > (b.name.toLowerCase())) ? -1 : 1)
      this.tempidname=false;
  
  
    }
  
  }
  
  
  sortbycountry(){
    if (this.tempidcountry ===false ) {
  
      this.mobiledetails.sort((a: any, b: any) => ((a.country.toLowerCase()) > (b.country.toLowerCase())) ? 1 : -1  )
      
      this.tempidcountry=true;
  
  
    }
    else  {
      this.mobiledetails.sort((a: any, b: any) => ((a.country.toLowerCase()) > (b.country.toLowerCase())) ? -1 : 1)
      this.tempidcountry=false;
  
  
    }
  
  }
  
  


}
