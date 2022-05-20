import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FeaturesRoutingModule } from './features-routing.module';


@NgModule({
  declarations: [AddProductComponent,EditProductComponent,ProductDetailsComponent,ProductListComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ReactiveFormsModule
  ]
})
export class FeaturesModule { }
