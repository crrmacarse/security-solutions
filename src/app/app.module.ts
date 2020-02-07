import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent as ClientLoginComponent } from './components/client/auth/login/login.component';
import { RegisterComponent as ClientRegisterComponent } from './components/client/auth/register/register.component';
import { DashboardComponent as AdminDashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent as AdminLoginComponent } from './components/admin/auth/login/login.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { AboutComponent } from './components/public/about/about.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { TodosComponent } from './components/sample/todos/todos.component';
import { TodoItemComponent } from './components/sample/todo-item/todo-item.component';

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
    ClientLoginComponent,
    ClientRegisterComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    PageNotFoundComponent,
    AboutComponent,
    ContactComponent,
    NavbarComponent,
    FooterComponent,
    TodosComponent,
    TodoItemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
