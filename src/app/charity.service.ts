import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { CHARITIES } from './charity-data';
@Injectable()
export class CharityService {

  constructor() { }

  getCharity() {
    return CHARITIES;
  }

  getCharityById(charityId: number){
    for (var i = 0; i <= CHARITIES.length - 1; i++) {
      if (CHARITIES[i].id === charityId) {
        return CHARITIES[i];
      }
    }
  }

}
