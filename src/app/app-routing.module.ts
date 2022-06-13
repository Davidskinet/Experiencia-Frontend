import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'home',
    loadChildren:  () => import('./pages/home/home.module').then(m => m.HomeModule),   
    //canActivate:[AuthGuardService]
  },
  {
    path:'',
    loadChildren:  () => import('./pages/login/login.module').then(m => m.LoginModule) 
  },
      
    {
      path: '**',
      redirectTo: ''
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
