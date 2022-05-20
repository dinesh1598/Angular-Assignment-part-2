import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeScreenComponent } from './welcome-screen/welcome-screen.component';
import { TestFormComponent } from './test-form/test-form.component';
import { EditProductComponent } from './features/edit-product/edit-product.component';
import { PageNotFoundComponent } from './core/core/page-not-found/page-not-found.component';
import { LoginComponent } from './auth/authenticate/login/login.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component:LoginComponent
  },
  {
    path: 'welcomescreen',
    component: WelcomeScreenComponent,
  },
  {
    path: '',
    loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
