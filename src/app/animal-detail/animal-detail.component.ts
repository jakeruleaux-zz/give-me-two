import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cause } from '../cause.model';
import { AnimalsService } from '../animals.service';


@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css'],
  providers: [AnimalsService]

})
export class AnimalDetailComponent implements OnInit {
  animalId: string;
  animalToDisplay;

  constructor(private route: ActivatedRoute, private location: Location, private animalService: AnimalsService) {}

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
     this.animalId = urlParameters['id'];
   });
   this.animalToDisplay = this.animalService.getAnimalById(this.animalId);
   }




}
