import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {adminRoutes, AdminRoutingModule} from "./admin.route";
import {SidebarComponent} from "./sidebar/sidebar.component";
import {TypeTreeComponent} from "./type-tree/type-tree.component";
import {AdminComponent} from "./admin.component";

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(adminRoutes),
    AdminRoutingModule,
  ],
  exports: [],
  declarations: [
    AdminComponent,
    SidebarComponent,
    TypeTreeComponent,
  ],
  providers: [],
})
export class AdminModule { }
