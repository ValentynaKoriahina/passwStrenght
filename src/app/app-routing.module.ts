import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckPasswordComponent } from './check-password/check-password.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'checkPassword' },
  { path: 'checkPassword', component: CheckPasswordComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
