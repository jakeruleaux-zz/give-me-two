import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';
import { CharityService } from '../charity.service';


@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css'],
  providers: [CharityService]
})
export class CharityComponent implements OnInit {
  charities: Cause[];

  constructor(private router: Router, private charityService: CharityService) { }

  ngOnInit() {
    this.charities = this.charityService.getCharity();

  }

  goToDetailPage(clickedCharity: Cause) {
    this.router.navigate(['charity', clickedCharity.id]);
  };


}
