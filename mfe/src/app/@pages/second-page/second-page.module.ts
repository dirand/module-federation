import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomButtonModule } from 'src/app/custom-button/custom-button.module';

import { SecondPageComponent } from './second-page.component';

@NgModule({
  imports: [CommonModule, CustomButtonModule],
  exports: [],
  declarations: [SecondPageComponent],
  providers: [],
})
export class SecondPageModule {}
