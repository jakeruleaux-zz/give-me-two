import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css']
})
export class EducationDetailComponent implements OnInit {
  educationId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
     this.educationId = parseInt(urlParameters['id']);
   });
  }

}
