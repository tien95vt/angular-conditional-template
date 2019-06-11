import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if-cmp',
  templateUrl: './ng-if-cmp.component.html',
  styleUrls: ['./ng-if-cmp.component.css']
})
export class NgIfCmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  isLoggedIn = true;

}
