import { Component, OnInit } from '@angular/core';
import { EducationService } from '../education.service';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-education-admin',
  templateUrl: './education-admin.component.html',
  styleUrls: ['./education-admin.component.css'],
  providers: [EducationService]
})
export class EducationAdminComponent implements OnInit {

  constructor(private educationService: EducationService) { }

  ngOnInit() {
  }
  
  submitForm(title: string, description: string, funding: number, swag: string, id: string) {
    let newEducation: Cause = new Cause(title, description, funding, swag, id);
    this.educationService.addEducation(newEducation);
  }
}
