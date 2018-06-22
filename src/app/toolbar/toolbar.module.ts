import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule, MatFormFieldModule, MatSelectModule } from '@angular/material';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  declarations: [ToolbarComponent],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
