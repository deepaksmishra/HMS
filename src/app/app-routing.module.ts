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
import { UserService } from './user.service';
import { UserRegistrationComponent } from './userregistration/userregistration.component';
import { PdfviewComponent } from './pdfview/pdfview.component';
import { PdfviewNewComponent } from './pdfview-new/pdfview-new.component';



const routes: Routes = [{'path': 'login', component: LoginComponent},
{'path':'files',loadChildren:()=>import('./files/files.module').then(module=>module.FilesModule)},
{'path': 'register', component: RegisterComponent},
{'path': '', component: HomeComponent},
{'path': 'header', component: HeaderComponent},
{'path': 'footer', component: FooterComponent},
{'path': 'userhome', component: UserhomeComponent, },
{'path': 'topbody', component: TopBodyComponent},
{'path': 'topheader', component: TopHeaderComponent},
{'path': 'aboutus', component: AboutusPageComponent},
{'path': 'contactus', component: ContactusPageComponent},
{'path': 'Userregistration', component: UserRegistrationComponent},
//{'path': '**', component: PageNotFoundComponent}, //404 page ** removed
//{'path':'adduser', loadChildren: 'app/dashboardfunctions/adduser/adduser.module#AdduserModule'},
{'path':'admin',loadChildren:()=>import('./adduser/adduser.module').then(module=>module.AdduserModule)},

{'path': 'pdf', component:PdfviewComponent},
{'path': 'pdfn', component:PdfviewNewComponent},


// {'path':'trail',loadChildren:()=>import('./trail/trail.module').then(module=>module.TrailModule)},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
