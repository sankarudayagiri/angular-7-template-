import { Component, OnInit, Input } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
//import { TranslateService } from '@ngx-translate/core';
import { SidebarToggleService } from './../../../_services/sidebar-toggle.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    boolValue:boolean;

    @Input() collapedSideBar: boolean=false;
    myFriend2:boolean=false;

    constructor(public router: Router, private sidebarTSer: SidebarToggleService) {

        // this.translate.addLangs(['en', 'fr', 'ur', 'es', 'it', 'fa', 'de', 'zh-CHS']);
        // this.translate.setDefaultLang('en');
        // const browserLang = this.translate.getBrowserLang();
        // this.translate.use(browserLang.match(/en|fr|ur|es|it|fa|de|zh-CHS/) ? browserLang : 'en');

        this.router.events.subscribe(val => {
            if (
                val instanceof NavigationEnd &&
                window.innerWidth <= 992 &&
                this.isToggled()
            ) {
                this.toggleSidebar();
            }
        });
    }

    ngOnInit() {
        // debugger;
        console.log("header");
        this.pushRightClass = 'push-right';
        // console.log("this is from header");
        // console.log(this.collapedSideBar);
        this.sidebarTSer.teacherMsg$.subscribe((message:boolean) => {
            //alert("hello from header"+message);
            this.boolValue=message;

        });
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        localStorage.removeItem('isLoggedin');
    }

    // changeLang(language: string) {
    //     this.translate.use(language);
    // }
    inputVal(){
        console.log("from header function");
        console.log(this.collapedSideBar);
    }
    inputToggle()
    {
        this.myFriend2=!this.myFriend2;
        console.log("inputtoggle");
        console.log(this.myFriend2);
    } 
}
