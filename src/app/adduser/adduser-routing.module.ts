import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { UserlistComponent } from './userlist/userlist.component';

const routes: Routes = [
  {path :'userlist' , component: UserlistComponent},
  {path :'details' , component: DetailsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdduserRoutingModule { }
