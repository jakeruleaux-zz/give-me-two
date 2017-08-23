import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
// import { CharityService } from '../charity.service';
// import { EducationService } from '../education.service';
// import { MedicalService } from '../medical.service';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-animal-admin',
  templateUrl: './animal-admin.component.html',
  styleUrls: ['./animal-admin.component.css'],
  providers: [AnimalsService],
  // providers: [CharityService],
  // providers: [EducationService],
  // providers: [MedicalService]
})
export class AnimalAdminComponent implements OnInit {

  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, funding: number, swag: string) {
    var newAnimal: Cause = new Cause(title, description, funding, swag);
    this.animalsService.addAnimal(newAnimal);

  }


}
