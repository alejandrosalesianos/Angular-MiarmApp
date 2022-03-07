import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PostListComponent } from './post-list/post-list.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: "",pathMatch: "full",redirectTo: '/register'},
  {path: 'register',component: RegisterComponent},
  {path: 'login',component:LoginComponent},
  {path: 'posts',component:PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
