import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';
import { CharityService } from '../charity.service';
import { FirebaseListObservable } from 'angularfire2/database';


@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css'],
  providers: [CharityService]
})
export class CharityComponent implements OnInit {
  charities: FirebaseListObservable<any[]>;
  currentRoute: string = this.router.url;

  constructor(private router: Router, private charityService: CharityService) { }

  ngOnInit() {
    this.charities = this.charityService.getCharity();

  }

  goToCharityDetailPage(clickedCharity) {
    this.router.navigate(['charities', clickedCharity.$key]);
  };


}
