import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

    collapedSideBar: boolean=false;
    ng: boolean=false;

    constructor() {}

    ngOnInit() {
        console.log("from layout")
        console.log(this.collapedSideBar);
    }

    receiveCollapsed($event) {
        this.collapedSideBar = $event;
        console.log("hello the following is  collapsed value")
        console.log($event);
        this.ng=$event;
    }
}
