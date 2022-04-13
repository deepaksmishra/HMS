import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdduserRoutingModule } from './adduser-routing.module';
import { DetailsComponent } from './details/details.component';
import { UserlistComponent } from './userlist/userlist.component';

console.warn("Adduser Module Loaded")

@NgModule({
  declarations: [
    DetailsComponent,
    UserlistComponent
  ],
  imports: [
    CommonModule,
    AdduserRoutingModule
  ]
})
export class AdduserModule { }
