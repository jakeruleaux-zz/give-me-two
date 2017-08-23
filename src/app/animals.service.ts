import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
import { ANIMALS } from './animal-data';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';


@Injectable()
export class AnimalsService {
  animals: FirebaseListObservable<any[]>;

  constructor(private database: AngularFireDatabase) {
    this.animals = database.list('animals');
 }

  getAnimals() {
    return this.animals;
  }

  getAnimalById(animalId) {
    return this.database.object('animals/' + animalId);
 }

 addAnimal(newAnimal: Cause) {
    this.animals.push(newAnimal);
  }
}
