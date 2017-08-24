import { Injectable } from '@angular/core';
import { Cause } from './cause.model';
// import { ANIMALS } from './animal-data';
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
 updateCause(localUpdatedCause){
    var causeEntryInFirebase = this.getAnimalById(localUpdatedCause.$key);
    causeEntryInFirebase.update({title: localUpdatedCause.title,
                                description: localUpdatedCause.description,
                                funding: localUpdatedCause.funding,
                                swag: localUpdatedCause.swag
                                });
  }

  deleteCause(localCauseToDelete){
   var causeEntryInFirebase = this.getAnimalById(localCauseToDelete.$key);
   causeEntryInFirebase.remove();
 }

 addAnimal(newAnimal: Cause) {
    this.animals.push(newAnimal);
  }
}
