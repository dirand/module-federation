import { Lib2Module } from '@lib2';
import { Lib1Module } from '@lib1';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, Lib1Module, Lib2Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
