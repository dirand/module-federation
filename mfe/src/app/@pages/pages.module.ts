import { SecondPageModule } from './second-page/second-page.module';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LayoutModule } from '../@layout/layout.module';
import { DefaultModule } from './default/default.module';
import { PagesRoutingModule } from './pages-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    LayoutModule,
    DefaultModule,
    SecondPageModule,
  ],
  exports: [],
  declarations: [],
  providers: [],
})
export class PagesModule {}
