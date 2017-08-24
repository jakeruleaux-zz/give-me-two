import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FundageService } from '../fundage.service';
import { Fundage } from '../fundage.model';
import { FUNDAGE } from '../donation-data';
import { FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
  providers: [FundageService]
})
export class DonationComponent implements OnInit {
  // fundage: FirebaseListObservable<any[]>;

  constructor(private router: Router, private fundageService: FundageService) { }

  newFundage: Fundage = new Fundage(0);

  ngOnInit() {
    console.log(this.newFundage);
  }

  donateButton(total: number) {
    let newSum: Fundage = new Fundage(total);
    console.log(newSum);
    this.fundageService.addSum(newSum);
  }
}
