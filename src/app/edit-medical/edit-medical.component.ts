import { Component, Input, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { MedicalService } from '../medical.service';

@Component({
  selector: 'app-edit-medical',
  templateUrl: './edit-medical.component.html',
  styleUrls: ['./edit-medical.component.css'],
  providers: [MedicalService]
})
export class EditMedicalComponent implements OnInit {
  @Input() selectedMedical;

  constructor(private medicalService: MedicalService) { }

  ngOnInit() {
  }
  beginUpdatingCause(causeToUpdate){
    this.medicalService.updateCause(causeToUpdate);
  }

  beginDeletingCause(causeToDelete){
  if(confirm("Larry, are you sure you want to delete this item from the inventory? For real this time?")){
    this.medicalService.deleteCause(causeToDelete);
  }
}

}
