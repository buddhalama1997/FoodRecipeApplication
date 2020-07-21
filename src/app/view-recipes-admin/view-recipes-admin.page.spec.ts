import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewRecipesAdminPage } from './view-recipes-admin.page';

describe('ViewRecipesAdminPage', () => {
  let component: ViewRecipesAdminPage;
  let fixture: ComponentFixture<ViewRecipesAdminPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRecipesAdminPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewRecipesAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
