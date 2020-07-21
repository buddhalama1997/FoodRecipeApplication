import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewRecipesAdminPageRoutingModule } from './view-recipes-admin-routing.module';

import { ViewRecipesAdminPage } from './view-recipes-admin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewRecipesAdminPageRoutingModule
  ],
  declarations: [ViewRecipesAdminPage]
})
export class ViewRecipesAdminPageModule {}
