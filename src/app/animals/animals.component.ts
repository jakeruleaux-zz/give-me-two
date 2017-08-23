import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  animals: Cause[];


  goToDetailPage(clickedAnimal: Cause) {
    this.router.navigate(['animals', clickedAnimal.id]);
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
