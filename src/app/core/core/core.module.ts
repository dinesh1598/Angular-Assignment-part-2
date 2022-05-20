import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UnauthorizePageComponent } from './unauthorize-page/unauthorize-page.component';


@NgModule({
  declarations: [
    PageNotFoundComponent,
    UnauthorizePageComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
