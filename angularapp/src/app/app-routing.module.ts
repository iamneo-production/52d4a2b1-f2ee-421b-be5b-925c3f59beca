import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { LoginComponent } from './components/login/login.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './guards/auth.guard';
const routes: Routes = [
  { path : 'user/login',component: LoginComponent },
  { path : 'user/signup',component: SignupComponent },
  { path : 'user/forget-password',component: ForgetPasswordComponent },
  { path : '',redirectTo : 'user/login',pathMatch :'full' },
  {
    path: 'user',
    canActivate :[AuthGuard],
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
  },
  { path : '**',component: NotFoundComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
