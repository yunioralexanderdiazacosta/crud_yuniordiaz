import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CrudListComponent } from './components/crud-list/crud-list.component';
import { CrudFormComponent } from './components/crud-form/crud-form.component';
import { CrudViewComponent } from './components/crud-view/crud-view.component';
import { NavegationComponent } from './components/navegation/navegation.component';

import { HttpClientModule } from '@angular/common/http';
import {  FormsModule } from '@angular/forms';
import { ContactosService } from './services/contactos.service';

@NgModule({
  declarations: [
    AppComponent,
    CrudListComponent,
    CrudFormComponent,
    CrudViewComponent,
    NavegationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ContactosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
