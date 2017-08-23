import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../animals.service';
import { CharityService } from '../charity.service';
import { EducationService } from '../education.service';
import { MedicalService } from '../medical.service';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AnimalsService],
  // providers: [CharityService],
  // providers: [EducationService],
  // providers: [MedicalService]
})
export class AdminComponent implements OnInit {

  constructor(private animalsService: AnimalsService, private charityService: CharityService, private educationService: EducationService, private medicalService: MedicalService,) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, funding: number, swag: string, id: string) {
    var newAnimal: Cause = new Cause(title, description, funding, swag, id);
    this.animalsService.addAnimal(newAnimal);

  }


}
