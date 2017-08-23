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

}
