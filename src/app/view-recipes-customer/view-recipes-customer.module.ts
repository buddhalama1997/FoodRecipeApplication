import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRecipesCustomerPageRoutingModule } from './view-recipes-customer-routing.module';

import { ViewRecipesCustomerPage } from './view-recipes-customer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRecipesCustomerPageRoutingModule
  ],
  declarations: [ViewRecipesCustomerPage]
})
export class ViewRecipesCustomerPageModule {}
