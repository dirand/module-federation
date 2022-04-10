import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomButtonModule } from 'src/app/custom-button/custom-button.module';

import { DefaultComponent } from './default.component';

@NgModule({
  imports: [CommonModule, CustomButtonModule],
  exports: [],
  declarations: [DefaultComponent],
  providers: [],
})
export class DefaultModule {}
