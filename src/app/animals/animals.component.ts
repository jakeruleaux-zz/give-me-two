import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';
import { AnimalsService } from '../animals.service';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  providers: [AnimalsService]
})
export class AnimalsComponent implements OnInit {
  animals: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;
  
  constructor(private router: Router, private animalsService: AnimalsService) { }

  ngOnInit() {
    this.animals = this.animalsService.getAnimals();
  }

  goToAnimalDetailPage(clickedAnimal) {
     this.router.navigate(['animals', clickedAnimal.$key]);
  };
}
