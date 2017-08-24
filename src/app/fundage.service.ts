import { Injectable } from '@angular/core';
import { Fundage } from './fundage.model';
import { FUNDAGE } from './donation-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class FundageService {
  fundage: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.fundage = database.list('fundage');
}

  getFundage() {
    return this.fundage;
  }

  addSum(newSum: Fundage) {
     this.fundage.push(newSum);
   }

}
