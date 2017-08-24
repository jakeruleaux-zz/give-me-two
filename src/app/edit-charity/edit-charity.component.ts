import { Component, Input, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { CharityService } from '../charity.service';


@Component({
  selector: 'app-edit-charity',
  templateUrl: './edit-charity.component.html',
  styleUrls: ['./edit-charity.component.css'],
  providers: [CharityService]
})
export class EditCharityComponent implements OnInit {
  @Input() selectedCharity;

  constructor(private charityService: CharityService) { }

  ngOnInit() {
  }
  beginUpdatingCause(causeToUpdate){
    this.charityService.updateCause(causeToUpdate);
  }

  beginDeletingCause(causeToDelete){
  if(confirm("Larry, are you sure you want to delete this item from the inventory?")){
    this.charityService.deleteCause(causeToDelete);
  }
  }
}
