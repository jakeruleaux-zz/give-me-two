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
  fundages: FirebaseListObservable<any[]>;
  fundageId: string;
  fundagesToDisplay;
  somethingDifferent;

  constructor(private router: Router, private fundageService: FundageService) { }


  ngOnInit() {
    this.fundagesToDisplay = this.fundageService.getFundageById(this.fundageId);
  }

  donateButton(total: number) {
    let newFundage: Fundage = new Fundage(total);
    console.log(newFundage);
    this.fundageService.addFundage(newFundage);
    this.somethingDifferent = newFundage;
  }
}
