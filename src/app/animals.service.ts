import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { ANIMALS } from './animal-data';

@Injectable()
export class AnimalsService {

  constructor() { }

  getAnimals(){
    return ANIMALS;
  }

  getAnimalById(animalId: number){
   for (var i = 0; i <= ANIMALS.length - 1; i++) {
     if (ANIMALS[i].id === animalId) {
       return ANIMALS[i];
     }
   }
 }
}
