import { Component, Input, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { EducationService } from '../education.service';

@Component({
  selector: 'app-edit-education',
  templateUrl: './edit-education.component.html',
  styleUrls: ['./edit-education.component.css'],
  providers: [EducationService]
})
export class EditEducationComponent implements OnInit {
  @Input() selectedEducation;

  constructor(private educationService: EducationService) { }

  ngOnInit() {
  }
  beginUpdatingCause(causeToUpdate){
    this.educationService.updateCause(causeToUpdate);
  }

  beginDeletingCause(causeToDelete){
  if(confirm("Larry, are you sure you want to delete this item from the inventory?")){
    this.educationService.deleteCause(causeToDelete);
  }
  }
}
