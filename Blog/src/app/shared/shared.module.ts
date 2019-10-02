import { MaterialModule } from './modules/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    MaterialModule
  ]
})

export class SharedModule {}