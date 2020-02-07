import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './public/home/home.component';
import { LoginComponent as ClientLoginComponent } from './client/auth/login/login.component';
import { RegisterComponent as ClientRegisterComponent } from './client/auth/register/register.component';
import { DashboardComponent as AdminDashboardComponent } from './admin/dashboard/dashboard.component';
import { LoginComponent as AdminLoginComponent } from './admin/auth/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { AboutComponent } from './public/about/about.component';
import { ContactComponent } from './public/contact/contact.component';

const appRoutes: Routes = [
  { path: 'register', component: ClientLoginComponent },
  { path: 'login', component: ClientRegisterComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'admin', component: AdminDashboardComponent },
  { path: 'admin/login', component: AdminLoginComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
