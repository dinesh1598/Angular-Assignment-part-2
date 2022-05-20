import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { PageNotFoundComponent } from '../core/core/page-not-found/page-not-found.component';
import { UnauthorizePageComponent } from '../core/core/unauthorize-page/unauthorize-page.component';
import { LoginComponent } from '../auth/authenticate/login/login.component';
import { ActivaterouteGuard } from '../auth/guard/activateroute.guard';


const routes: Routes = [  {
  path: 'productlist',
  // canActivate:[ActivaterouteGuard],
  component: ProductListComponent,
},
{
  path: 'productdetails/:id',
  component: ProductDetailsComponent,
},

{
  path: 'addproduct',
  component: AddProductComponent,
},
{
  path: 'editproduct/:id',
  component: EditProductComponent,
},
{
  path: 'login',
  component: LoginComponent,
},
{
  path: 'unknown',
  component: UnauthorizePageComponent,
},
{
  path: '**',
  component: PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
