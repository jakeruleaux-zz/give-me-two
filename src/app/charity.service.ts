import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { CHARITIES } from './charity-data';
@Injectable()
export class CharityService {

  constructor() { }

  getCharity() {
    return CHARITIES;
  }
}
