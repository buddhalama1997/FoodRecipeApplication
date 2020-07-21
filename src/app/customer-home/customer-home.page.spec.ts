import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CustomerHomePage } from './customer-home.page';

describe('CustomerHomePage', () => {
  let component: CustomerHomePage;
  let fixture: ComponentFixture<CustomerHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerHomePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CustomerHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
