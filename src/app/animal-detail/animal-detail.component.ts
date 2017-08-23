import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {
  animalId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
     this.animalId = parseInt(urlParameters['id']);
   });
  }

}
