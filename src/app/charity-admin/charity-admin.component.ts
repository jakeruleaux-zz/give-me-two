import { Component, OnInit } from '@angular/core';
import { CharityService } from '../charity.service';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-charity-admin',
  templateUrl: './charity-admin.component.html',
  styleUrls: ['./charity-admin.component.css'],
  providers: [CharityService]
})
export class CharityAdminComponent implements OnInit {

  constructor(private charityService: CharityService) { }

  ngOnInit() {
  }
  submitForm(title: string, description: string, funding: number, swag: string, id: string) {
    let newCharity: Cause = new Cause(title, description, funding, swag, id);
    this.charityService.addCharity(newCharity);
  }
}
