import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';
import { MedicalService } from '../medical.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css'],
  providers: [MedicalService]
})
export class MedicalComponent implements OnInit {
  medicals: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private medicalService: MedicalService) { }

  ngOnInit() {
    this.medicals = this.medicalService.getMedical();
  }

  goToMedicalDetailPage(clickedMedical) {
    this.router.navigate(['medicals', clickedMedical.$key]);

  };
}
