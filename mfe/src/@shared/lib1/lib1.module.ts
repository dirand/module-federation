import { NgModule } from '@angular/core';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { Lib1Service } from './lib1.service';

@NgModule({
  imports: [AppRoutingModule],
  exports: [],
  declarations: [],
  providers: [Lib1Service],
})
export class Lib1Module {}
