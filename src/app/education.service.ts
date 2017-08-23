import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { EDUCATIONS } from './medical-data';

@Injectable()
export class EducationService {

  constructor() { }

  getEducation( ) {
    return EDUCATIONS;
  }
}
