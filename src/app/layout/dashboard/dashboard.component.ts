import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  someArray: string[]=["id1","id2","id3","id4","id5","id6","id7"]
  constructor() { }

  ngOnInit() {
  }
  someButton(n:number){
    console.log("sankur.. ...");
    for(let i=1;i<=7;i++){
      if(n==i){
        document.getElementById(this.someArray[i-1]).style.color="#FFFFFF";
        document.getElementById(this.someArray[i-1]).style.backgroundColor="#66C19F";
      }

    }
  }

}
