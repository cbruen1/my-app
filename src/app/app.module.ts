import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';

import { AppComponent } from './app.component';
import { MyTodoCompComponent } from './my-todo-comp/my-todo-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    MyTodoCompComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
