import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';
import { MedicalService } from '../medical.service';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css'],
  providers: [MedicalService]
})
export class MedicalComponent implements OnInit {
  medicals: Cause[];

  constructor(private router: Router, private medicalService: MedicalService) { }

  ngOnInit() {
    this.medical = this.medicalService.getMedical();
  }

  goToDetailPage(clickedMedical: Cause) {
    this.router.navigate(['medicals', clickedMedical.id]);
  };
}
