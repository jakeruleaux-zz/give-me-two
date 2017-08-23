import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-charity-detail',
  templateUrl: './charity-detail.component.html',
  styleUrls: ['./charity-detail.component.css']
})
export class CharityDetailComponent implements OnInit {
  charityId: number = null;

  constructor(private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
   this.route.params.forEach((urlParameters) => {
     this.charityId = parseInt(urlParameters['id']);
   });
  }

}
