import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-charity',
  templateUrl: './charity.component.html',
  styleUrls: ['./charity.component.css']
})
export class CharityComponent implements OnInit {
  charities: Cause[];

  goToDetailPage(clickedCharity: Cause) {
    this.router.navigate(['charity', clickedCharity.id]);
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
