import { Component, Input, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { AnimalsService } from '../animals.service';

@Component({
  selector: 'app-edit-animals',
  templateUrl: './edit-animals.component.html',
  styleUrls: ['./edit-animals.component.css'],
  providers: [AnimalsService]
})
export class EditAnimalsComponent implements OnInit {
  @Input() selectedAnimal;

  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
  }
  beginUpdatingCause(causeToUpdate){
    this.animalsService.updateCause(causeToUpdate);
  }

  beginDeletingCause(causeToDelete){
  if(confirm("Larry, are you sure you want to delete this item from the inventory?")){
    this.animalsService.deleteCause(causeToDelete);
  }
}

}
