import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-medical-detail',
  templateUrl: './medical-detail.component.html',
  styleUrls: ['./medical-detail.component.css']
})
export class MedicalDetailComponent implements OnInit {
  medicalId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
     this.medicalId = parseInt(urlParameters['id']);
   });
  }

}
