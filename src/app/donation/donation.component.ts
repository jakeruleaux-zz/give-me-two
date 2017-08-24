import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FundageService } from '../fundage.service';
import { Fundage } from '../fundage.model';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
  providers: [FundageService]
})
export class DonationComponent implements OnInit {

  // constructor(private fundageService: fundageService) { }

  ngOnInit() {
  }

  // donateButton(total: number) {
  //    let newTotal: Fundage = new Fundage(total);
  //    this.fundageService.addTotal(newTotal);
  //  }
}
