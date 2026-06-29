import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialAngularSelectComponent } from './material-angular-select.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MaterialAngularSelectComponent],
  exports: [MaterialAngularSelectComponent],
})
export class MaterialAngularSelectModule {}
