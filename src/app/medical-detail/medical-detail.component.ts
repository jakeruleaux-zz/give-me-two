import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cause } from '../cause.model';
import { MedicalService } from '../medical.service';

@Component({
  selector: 'app-medical-detail',
  templateUrl: './medical-detail.component.html',
  styleUrls: ['./medical-detail.component.css'],
  providers: [MedicalService]
})
export class MedicalDetailComponent implements OnInit {
  medicalId: number;
  medicalToDisplay: Cause;

  constructor(private route: ActivatedRoute, private location: Location, private medicalService: MedicalService) {}

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
     this.medicalId = parseInt(urlParameters['id']);
   });
   this.medicalToDisplay = this.medicalService.getMedicalById(this.medicalId);

  }

}
