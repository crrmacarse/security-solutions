import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as ROUTES from 'app/constants/routes';

import { HomeComponent } from './components/public/home/home.component';
import { LoginComponent as ClientLoginComponent } from './components/client/auth/login/login.component';
import { RegisterComponent as ClientRegisterComponent } from './components/client/auth/register/register.component';
import { DashboardComponent as AdminDashboardComponent } from './components/admin/dashboard/dashboard.component';
import { LoginComponent as AdminLoginComponent } from './components/admin/auth/login/login.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { AboutComponent } from './components/public/about/about.component';
import { ContactComponent } from './components/public/contact/contact.component';
import { HowItWorksComponent } from './components/public/how-it-works/how-it-works.component';
import { QuoteComponent } from './components/public/quote/quote.component';
import { TestimonialsComponent } from './components/public/testimonials/testimonials.component';
import { ReportComponent } from './components/shared/report/report.component';
import { HelpComponent } from './components/public/help/help.component';
import { TodosComponent } from './components/sample/todos/todos.component';

const adminRoutes: Routes = [
  { path: ROUTES.ADMIN_DASHBOARD, component: AdminDashboardComponent },
  { path: ROUTES.ADMIN_LOGIN, component: AdminLoginComponent },
];

const clientRoutes: Routes = [
  { path: ROUTES.CLIENT_LOGIN, component: ClientLoginComponent },
  { path: ROUTES.CLIENT_REGISTER, component: ClientRegisterComponent },
];

const appRoutes: Routes = [
  ...adminRoutes,
  ...clientRoutes,
  { path: ROUTES.ABOUT, component: AboutComponent },
  { path: ROUTES.CONTACT, component: ContactComponent },
  { path: ROUTES.HOW_IT_WORKS, component: HowItWorksComponent },
  { path: ROUTES.QUOTE, component: QuoteComponent },
  { path: ROUTES.TESTIMONIALS, component: TestimonialsComponent },
  { path: ROUTES.REPORT, component: ReportComponent },
  { path: ROUTES.HELP, component: HelpComponent },
  { path: ROUTES.TODOS, component: TodosComponent },
  { path: ROUTES.HOME, component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
