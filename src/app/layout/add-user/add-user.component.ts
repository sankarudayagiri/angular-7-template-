import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.switchAddUserContent("", 'SP');
  }

  switchAddUserContent(evt,tabName){
    console.log("sansoda");
    var i, tabcontent;
    tabcontent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    document.getElementById(tabName).style.display = "block";
    if(evt!=""){
      evt.currentTarget.className += " active";
      }
    else{
      
      document.getElementById("defaultOpen").className+=" active"
    } 
  }
  

}
