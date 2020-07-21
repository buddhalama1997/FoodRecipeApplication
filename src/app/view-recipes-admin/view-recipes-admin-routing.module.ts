import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewRecipesAdminPage } from './view-recipes-admin.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRecipesAdminPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViewRecipesAdminPageRoutingModule {}
