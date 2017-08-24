import { Component, OnInit } from '@angular/core';
import { MedicalService } from '../medical.service';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-medical-admin',
  templateUrl: './medical-admin.component.html',
  styleUrls: ['./medical-admin.component.css'],
  providers: [MedicalService]
})
export class MedicalAdminComponent implements OnInit {

  constructor(private medicalService: MedicalService) { }

  ngOnInit() {
  }

  submitForm(title: string, description: string, funding: number, swag: string, id: string) {
    let newMedical: Cause = new Cause(title, description, funding, swag, id);
    this.medicalService.addMedical(newMedical);
  }
}
