import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { LoginComponent } from './HomePage/login/login.component';
import { SignupComponent } from './HomePage/signup/signup.component';
import { HomeComponent } from './HomePage/home/home.component';
import { AdminComponent } from './AdminWebsite/admin/admin.component';
import { UserComponent } from './UserWebsite/user/user.component';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule} from '@angular/forms';
import { CarouselComponent } from './UserWebsite/user/carousel/carousel.component';
import { SidebarComponent } from './AdminWebsite/admin/sidebar/sidebar.component';
import { AboutusComponent } from './HomePage/aboutus/aboutus.component';
import { UsercenterComponent } from './UserWebsite/usercenter/usercenter.component';


const routeConfig: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'user', component: UserComponent},
  {path: 'about', component: AboutusComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    AdminComponent,
    UserComponent,
    CarouselComponent,
    SidebarComponent,
    AboutusComponent,
    UsercenterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routeConfig)
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
