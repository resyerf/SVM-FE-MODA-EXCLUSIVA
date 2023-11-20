import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    loadComponent: ()=>
    import('mfHome/HomeComponent').then((m)=>m.HomeComponent),
  },
  {
    path:'login',
    loadComponent: () =>
    import('mfLogin/LoginUserComponent').then((m)=>m.LoginUserComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
