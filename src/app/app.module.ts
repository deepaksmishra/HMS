import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { UserhomeComponent } from './userhome/userhome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ActivateGuard } from './activate.guard';
import { UserService } from './user.service';
import { Approutes } from './routing';
import { RouterModule } from '@angular/router';
import { TopHeaderComponent } from './home/top-header/top-header.component';
import { TopBodyComponent } from './home/top-body/top-body.component';
import { AboutusPageComponent } from './home/aboutus-page/aboutus-page.component';
import { ContactusPageComponent } from './home/contactus-page/contactus-page.component';
import { PopupComponent } from './home/popup/popup.component';
import { FormsModule } from '@angular/forms';
import {MatRadioModule} from '@angular/material/radio';
import{ReactiveFormsModule} from '@angular/forms';
import {MatError, MatFormFieldModule} from '@angular/material/form-field';
import{MatInput, MatInputModule} from '@angular/material/input';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DashboardComponent,
    UserhomeComponent,
    PageNotFoundComponent,
    TopHeaderComponent,
    TopBodyComponent,
    AboutusPageComponent,
    ContactusPageComponent,
    PopupComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(Approutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    ReactiveFormsModule,
    FormsModule,
    MatRadioModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    
  
    
  ],
  providers: [ActivateGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }