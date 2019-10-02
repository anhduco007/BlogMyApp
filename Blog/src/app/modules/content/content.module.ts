import { FooterComponent } from './../main/footer/footer.component';
import { HeaderComponent } from './../main/header/header.component';
import { MaterialModule } from './../../shared/modules/material-module';
import { AboutMeComponent } from './about-me/about-me.component';
import { PhotoComponent } from './photo/photo.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'photo', component: PhotoComponent },
  { path: 'aboutme', component: AboutMeComponent },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [ContentComponent, HomeComponent, PhotoComponent, AboutMeComponent, HeaderComponent, FooterComponent]
})
export class ContentModule { }
