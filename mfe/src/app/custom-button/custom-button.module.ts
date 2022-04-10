import { SharedModule } from '@shared';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomButtonComponent } from './custom-button.component';

@NgModule({
  imports: [CommonModule],
  exports: [CustomButtonComponent],
  declarations: [CustomButtonComponent],
  providers: [],
})
export class CustomButtonModule {}
