import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHeaderComponent } from './components/app-header/app-header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { FooterComponent } from './components/footer/footer.component';
import { AsidemenuComponent } from './components/asidemenu/asidemenu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { Dashboard2Component } from './components/dashboard2/dashboard2.component';
import { FixedlayoutComponent } from './components/fixedlayout/fixedlayout.component';
import { SampledataComponent } from './components/sampledata/sampledata.component';
import { DatatableComponent } from './components/datatable/datatable.component';
import { ModalsComponent } from './components/modals/modals.component';
import { FormComponent } from './components/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppHeaderComponent,
    SidemenuComponent,
    FooterComponent,
    AsidemenuComponent,
    DashboardComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Dashboard2Component,
    FixedlayoutComponent,
    SampledataComponent,
    DatatableComponent,
    ModalsComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
