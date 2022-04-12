import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [{'path': 'login', component: LoginComponent},
{'path': 'register', component: RegisterComponent},
{'path': 'home', component: HomeComponent},
{'path': 'header', component: HeaderComponent},
{'path': 'footer', component: FooterComponent},
{'path': 'dashboard', component:DashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
