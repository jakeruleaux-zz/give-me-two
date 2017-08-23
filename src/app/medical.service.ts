import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { MEDICALS } from './medical-data';

@Injectable()
export class MedicalService {

  constructor() { }

  getMedical(){
    return MEDICALS;
  }
}
