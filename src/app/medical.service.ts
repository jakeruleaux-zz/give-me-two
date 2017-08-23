import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
// import { MEDICALS } from './medical-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class MedicalService {
  medicals: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.medicals = database.list('medicals');
 }

  getMedical() {
    return this.medicals;
  }

  getMedicalById(medicalId) {
    return this.database.object('medicals/' + medicalId);
  }

}
