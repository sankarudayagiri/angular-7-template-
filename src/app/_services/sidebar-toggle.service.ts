import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidebarToggleService {
  collapsedValue: string="deepak sansoda";
  booleanValue: boolean=false;
  private _teacherMsgSrc= new Subject<boolean>();
  teacherMsg$ = this._teacherMsgSrc.asObservable();

  constructor() { }

  getSome(){
    this.booleanValue=!this.booleanValue;
    return this.booleanValue;
  }
  sendMsg(msg: boolean){
    //debugger;
    this._teacherMsgSrc.next(msg);
    console.log(msg);

  }
}


