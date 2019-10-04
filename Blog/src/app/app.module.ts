import { ErrorComponent } from './modules/main/error/error.component';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ngx-ckeditor';

const routes: Routes = [
   { path: '', loadChildren: './modules/content/content.module#ContentModule' },
   { path: 'auth', loadChildren: './modules/auth/auth.module#AuthModule'},
   { path: '**', component: ErrorComponent}
]

@NgModule({
   declarations: [
      AppComponent,
      ErrorComponent
   ],
   imports: [
      BrowserModule,
      RouterModule.forRoot(routes),
      BrowserAnimationsModule,
      SharedModule,
      CKEditorModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ],
   exports: [
      RouterModule
   ]
})
export class AppModule { }
