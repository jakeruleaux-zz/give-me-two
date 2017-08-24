import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
// import { CHARITIES } from './charity-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class CharityService {
  charities: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.charities = database.list('charities');
 }

  getCharity() {
    return this.charities;
  }

  getCharityById(charityId) {
      return this.database.object('charities/' + charityId);
  }
  updateCause(localUpdatedCause){
     var causeEntryInFirebase = this.getCharityById(localUpdatedCause.$key);
     causeEntryInFirebase.update({title: localUpdatedCause.title,
                                 description: localUpdatedCause.description,
                                 funding: localUpdatedCause.funding,
                                 swag: localUpdatedCause.swag
                                 });
   }
   deleteCause(localCauseToDelete){
    var causeEntryInFirebase = this.getCharityById(localCauseToDelete.$key);
    causeEntryInFirebase.remove();
   }
   addCharity(newCharity: Cause) {
      this.charities.push(newCharity);
    }
}
