import { Component, OnInit } from '@angular/core';

import { SidebarToggleService } from './../../_services/sidebar-toggle.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  someArray: string[]=["id1","id2","id3","id4","id5","id6","id7"];
  count: number=0;

  name: string;
  nameBool:boolean;
  constructor(private sidebarTSer: SidebarToggleService) {
    this.name=this.sidebarTSer.collapsedValue;
   }

  ngOnInit() {
    // debugger
    //console.log(this.name);
    console.log("dashboard"); 
    this.sidebarTSer.teacherMsg$.subscribe((message) => {
      //alert("hello from header"+message);
      this.nameBool=message;

  });

  }
  someButton(n:number){
    //debugger;
    console.log("sankur.. ...");
    this.sidebarTSer.teacherMsg$.subscribe(msg => {
      console.log("form dashboard ngoninit");
      console.log(msg);
      this.nameBool=msg;
    });
    for(let i=1;i<=7;i++){
      if(n==i){
        document.getElementById(this.someArray[i-1]).style.color="#FFFFFF";
        document.getElementById(this.someArray[i-1]).style.backgroundColor="#66C19F";
      }

    }
  }

  total(n:number){
    if(n==1){
      this.count++;
    }
    else{
      if(this.count!=0)
        this.count--;
    }
  }

}
