import { Component } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthenticationService } from '../services/authentication.service';

interface StudentData {
  Name: string;
  Description: string;
  Steps: string;
}

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.page.html',
  styleUrls: ['./add-recipe.page.scss'],
})
export class AddRecipePage{
  userEmail: string;
  
  List = [];
  studentData: StudentData;
  studentForm: FormGroup;

  constructor(
    private firebaseService: FirebaseService,
    public fb: FormBuilder,
    private navCtrl: NavController,
    private authService: AuthenticationService
  ) {
    this.studentData = {} as StudentData;
  }

  ngOnInit() {

    this.authService.userDetails().subscribe(res => {
      console.log('res', res);
      if (res !== null) {
        this.userEmail = res.email;
      } else {
        this.navCtrl.navigateBack('');
      }
    }, err => {
      console.log('err', err);
    })


    this.studentForm = this.fb.group({
      Name: ['', [Validators.required]],
      Description: ['', [Validators.required]],
      Steps: ['', [Validators.required]]
    })
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
  CreateRecord() {
    console.log(this.studentForm.value);
    this.firebaseService.create_student(this.studentForm.value).then(resp => {
      this.studentForm.reset();
    })
      .catch(error => {
        console.log(error);
      });
  }

  RemoveRecord(rowID) {
    this.firebaseService.delete_student(rowID);
  }

  EditRecord(record) {
    record.isEdit = true;
    record.EditName = record.Name;
    record.EditDescription = record.Description;
    record.EditSteps = record.Steps;
  }
  UpdateRecord(recordRow) {
    let record = {};
    record['Name'] = recordRow.EditName;
    record['Description'] = recordRow.Description;
    record['Steps'] = recordRow.EditSteps;
    this.firebaseService.update_student(recordRow.id, record);
    recordRow.isEdit = false;
  }
  logout() {
    this.authService.logoutUser()
      .then(res => {
        console.log(res);
        this.navCtrl.navigateBack('');
      })
      .catch(error => {
        console.log(error);
      })
  }
}
