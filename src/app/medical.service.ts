import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { MEDICALS } from './medical-data';

@Injectable()
export class MedicalService {

  constructor() { }

  getMedical(){
    return MEDICALS;
  }

  getMedicalById(medicalId: number){
    for (var i = 0; i <= MEDICALS.length - 1; i++) {
      if (MEDICALS[i].id === medicalId) {
        return MEDICALS[i];
      }
    }
  }

}
