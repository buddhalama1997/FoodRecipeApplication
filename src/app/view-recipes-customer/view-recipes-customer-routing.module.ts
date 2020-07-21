import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRecipesCustomerPage } from './view-recipes-customer.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRecipesCustomerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRecipesCustomerPageRoutingModule {}
