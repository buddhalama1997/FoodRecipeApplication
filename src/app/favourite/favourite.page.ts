import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {
  constructor(private firebaseService: FirebaseService) { }
  List = [];
  ngOnInit() {
    this.firebaseService.read_Favourite().subscribe(data => {

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
