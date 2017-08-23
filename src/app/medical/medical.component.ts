import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {
  medicals: Cause[];

  goToDetailPage(clickedMedical: Cause) {
    this.router.navigate(['medicals', clickedMedical.id]);
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
