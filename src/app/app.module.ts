import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { ContainerComponent } from './container/container.component';
import { TaskComponent } from './task/task.component';


@NgModule({
  declarations: [
    AppComponent,
    PageHeaderComponent,
    TableHeaderComponent,
    ContainerComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
