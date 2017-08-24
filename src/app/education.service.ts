import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
// import { EDUCATIONS } from './education-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class EducationService {
  educations: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.educations = database.list('educations');
 }

  getEducation( ) {
    return this.educations;
  }

  getEducationById(educationId) {
    return this.database.object('educations/' + educationId);
  }
  updateCause(localUpdatedCause){
     var causeEntryInFirebase = this.getEducationById(localUpdatedCause.$key);
     causeEntryInFirebase.update({title: localUpdatedCause.title,
                                 description: localUpdatedCause.description,
                                 funding: localUpdatedCause.funding,
                                 swag: localUpdatedCause.swag
                                 });
   }

   deleteCause(localCauseToDelete){
    var causeEntryInFirebase = this.getEducationById(localCauseToDelete.$key);
    causeEntryInFirebase.remove();
  }

  addEducation(newEducation: Cause) {
     this.educations.push(newEducation);
   }
}
