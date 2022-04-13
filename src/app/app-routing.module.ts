import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserhomeComponent } from './userhome/userhome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [{'path': 'login', component: LoginComponent},
{'path': 'register', component: RegisterComponent},
{'path': '', component: HomeComponent},
{'path': 'header', component: HeaderComponent},
{'path': 'footer', component: FooterComponent},
{'path': 'userhome', component: UserhomeComponent},
{'path': '**', component: PageNotFoundComponent},
//{'path':'adduser', loadChildren: 'app/dashboardfunctions/adduser/adduser.module#AdduserModule'},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
