import { Component, OnInit } from '@angular/core';
import { Cause } from '../cause.model';

@Component({
  selector: 'app-medical',
  templateUrl: './medical.component.html',
  styleUrls: ['./medical.component.css']
})
export class MedicalComponent implements OnInit {
  medicals: Cause[] = [
    new Cause("animal", "Little Sally's Little Alligator", "Little Sally's alligator Gerald needs a new tail or he'll die.", 48029, "hat"),
    new Cause("animal", "My Neighbor's bird", "The guys next door have a bird that screams all night. I need money to hire a bird hitman.", 13902, "hat with a feather"),
    new Cause("animal", "Cat in a tree", "There's a cat in a tree. You've seen it before. It's not that special.", 980228, "the cat")
  ];

  constructor() { }

  ngOnInit() {
  }

}
