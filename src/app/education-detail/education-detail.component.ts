import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cause } from '../cause.model';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-education-detail',
  templateUrl: './education-detail.component.html',
  styleUrls: ['./education-detail.component.css'],
  providers: [EducationService]
})
export class EducationDetailComponent implements OnInit {
  educationId: number;
  educationToDisplay: Cause;

  constructor(private route: ActivatedRoute, private location: Location, private educationService: EducationService) {}

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
     this.educationId = parseInt(urlParameters['id']);
   });
   this.educationToDisplay = this.educationService.getEducationById(this.educationId);
   }


}
