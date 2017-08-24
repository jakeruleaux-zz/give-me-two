import { Injectable } from '@angular/core';
import { Fundage } from './fundage.model';
// import { FUNDAGE } from './donation-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FundageService {
  fundages: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.fundages = database.list('fundages');
}

  getFundages() {
    return this.fundages;
  }

  addFundage(newFundage: Fundage) {
    // console.log(newFundage);
     this.fundages.push(newFundage);
   }

   getFundageById(fundageId) {
     return this.database.object('fundages/' + fundageId);
  }

}
