import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-view-recipes-customer',
  templateUrl: './view-recipes-customer.page.html',
  styleUrls: ['./view-recipes-customer.page.scss'],
})
export class ViewRecipesCustomerPage implements OnInit {

  constructor(private firebaseService: FirebaseService) { }
  List = [];
  ngOnInit() {
    this.firebaseService.read_students().subscribe(data => {

      this.List = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          Name: e.payload.doc.data()['Name'],
          Description: e.payload.doc.data()['Description'],
          Steps: e.payload.doc.data()['Steps'],
        };
      })
      console.log(this.List);
    });
  }

}
