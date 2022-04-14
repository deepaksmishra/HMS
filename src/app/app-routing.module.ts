import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { UserhomeComponent  } from './userhome/userhome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TopBodyComponent } from './home/top-body/top-body.component';
import { TopHeaderComponent } from './home/top-header/top-header.component';
import { AboutusPageComponent } from './home/aboutus-page/aboutus-page.component';
import { ContactusPageComponent } from './home/contactus-page/contactus-page.component';


const routes: Routes = [{'path': 'login', component: LoginComponent},
{'path': 'register', component: RegisterComponent},
{'path': '', component: HomeComponent},
{'path': 'header', component: HeaderComponent},
{'path': 'footer', component: FooterComponent},
{'path': 'userhome', component: UserhomeComponent},
{'path': 'topbody', component: TopBodyComponent},
{'path': 'topheader', component: TopHeaderComponent},
{'path': 'aboutus', component: AboutusPageComponent},
{'path': 'contactus', component: ContactusPageComponent},
//{'path': '**', component: PageNotFoundComponent}, //404 page ** removed
//{'path':'adduser', loadChildren: 'app/dashboardfunctions/adduser/adduser.module#AdduserModule'},
{'path':'admin',loadChildren:()=>import('./adduser/adduser.module').then(module=>module.AdduserModule)},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
