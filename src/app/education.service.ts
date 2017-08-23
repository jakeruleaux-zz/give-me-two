import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { EDUCATIONS } from './education-data';

@Injectable()
export class EducationService {

  constructor() { }

  getEducation( ) {
    return EDUCATIONS;
  }

  getEducationById(educationId: number){
    for (var i = 0; i <= EDUCATIONS.length - 1; i++) {
      if (EDUCATIONS[i].id === educationId) {
        return EDUCATIONS[i];
      }
    }
  }

}
