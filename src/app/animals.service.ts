import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { ANIMALS } from './animal-data';

@Injectable()
export class AnimalsService {

  constructor() { }

  getAnimals(){
    return ANIMALS;
  }

}
