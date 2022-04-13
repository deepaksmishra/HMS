import {Routes} from '@angular/router';
import{HomeComponent} from './home/home.component';
import { UserhomeComponent } from './userhome/userhome.component';
import {ActivateGuard} from './activate.guard';

export const Approutes:Routes=[

    {path:'userhome',component:UserhomeComponent,canActivate:[ActivateGuard]},
    {path:'home',component:HomeComponent},
]