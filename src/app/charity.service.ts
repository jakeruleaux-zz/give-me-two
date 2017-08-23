import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { CHARITIES } from './charity-data';
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

}
