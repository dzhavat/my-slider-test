import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxSliderModule } from '@angular-slider/ngx-slider';

import { MySliderComponent } from './my-slider.component';

@NgModule({
  declarations: [MySliderComponent],
  exports: [MySliderComponent],
  imports: [CommonModule, NgxSliderModule],
})
export class MySliderModule {}
