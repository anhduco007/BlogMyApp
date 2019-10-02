import { MaterialModule } from './../../shared/modules/material-module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [MainComponent]
})
export class MainModule { }
