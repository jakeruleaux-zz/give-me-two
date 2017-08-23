import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';
import { EducationService } from '../education.service';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
  providers: [EducationService]
})
export class EducationComponent implements OnInit {
  educations: Cause[];

  constructor(private router: Router, private educationService: EducationService) { }

  ngOnInit() {
    this.educations = this.educationService.getEducation();

  }
  goToDetailPage(clickedEducation: Cause) {
    this.router.navigate(['educations', clickedEducation.id]);
  };


}
