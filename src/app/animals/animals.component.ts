import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css'],
  providers: [AnimalsService]
})
export class AnimalsComponent implements OnInit {
  animals: Cause[];

  constructor(private router: Router, private animalsService: AnimalsService) { }

  ngOnInit() {
    this.animals = this.animalsService.getAnimals();
  }

  goToAnimalDetailPage(clickedCause: Cause) {
    this.router.navigate(['animals', clickedCause.id]);
  };
}
