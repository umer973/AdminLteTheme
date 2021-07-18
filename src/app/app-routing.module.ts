import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { FixedlayoutComponent } from './components/fixedlayout/fixedlayout.component';
import { FormComponent } from './components/form/form.component';
import { LoginComponent } from './components/login/login.component';
import { ModalsComponent } from './components/modals/modals.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SampledataComponent } from './components/sampledata/sampledata.component';

const routes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard2', component: Dashboard2Component },
  { path: 'fixedlayout', component: FixedlayoutComponent },
  { path: 'sampledata', component: SampledataComponent },
  { path: 'datatable', component: DatatableComponent },
  { path: 'modals', component: ModalsComponent },
  { path: 'forms', component: FormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

