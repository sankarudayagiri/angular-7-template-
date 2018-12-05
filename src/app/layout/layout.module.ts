import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,        
        NgbDropdownModule
    ],
    declarations: [LayoutComponent, SidebarComponent, HeaderComponent, TabBarComponent],
    schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class LayoutModule {}
