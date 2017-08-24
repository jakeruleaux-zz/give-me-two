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

  updateCause(localUpdatedCause){
     var causeEntryInFirebase = this.getMedicalById(localUpdatedCause.$key);
     causeEntryInFirebase.update({title: localUpdatedCause.title,
                                 description: localUpdatedCause.description,
                                 funding: localUpdatedCause.funding,
                                 swag: localUpdatedCause.swag
                                 });
   }

   deleteCause(localCauseToDelete){
    var causeEntryInFirebase = this.getMedicalById(localCauseToDelete.$key);
    causeEntryInFirebase.remove();
  }

  addMedical(newMedical: Cause) {
     this.medicals.push(newMedical);
   }

}
