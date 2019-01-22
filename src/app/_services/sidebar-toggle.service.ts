import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {
  collapsedValue: string="deepak sansoda";
  booleanValue: boolean=false;
  constructor() { }

  getSome(){
    this.booleanValue=!this.booleanValue;
    return this.booleanValue;
  }
  sendSome(){
    return this.booleanValue;

  }
}


