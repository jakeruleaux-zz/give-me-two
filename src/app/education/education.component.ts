import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';
import { EducationService } from '../education.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [EducationService]
})
export class EducationComponent implements OnInit {
  educations: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private educationService: EducationService) { }

  ngOnInit() {
    this.educations = this.educationService.getEducation();

  }
  goToEducationDetailPage(clickedEducation) {
    this.router.navigate(['educations', clickedEducation.$key]);
  };


}
