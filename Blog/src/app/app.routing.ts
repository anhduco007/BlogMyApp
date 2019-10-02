import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './content/content.module#ContentModule' },
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule'},
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ]
})

export class AppRoutes {};
