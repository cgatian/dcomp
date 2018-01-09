import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DialogComponent } from './dialog.component';

export const dynamicComponents = [DialogComponent];

@NgModule({
  declarations: [
    DialogComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [],
  entryComponents: [
    DialogComponent
  ]
})
export class DialogModule {
  dynamicComponents = dynamicComponents;
}
