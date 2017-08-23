import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  educations: Cause[];
  goToDetailPage(clickedEducation: Cause) {
    this.router.navigate(['educations', clickedEducation.id]);
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
