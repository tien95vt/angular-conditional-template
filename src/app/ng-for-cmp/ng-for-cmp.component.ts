import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-cmp',
  templateUrl: './ng-for-cmp.component.html',
  styleUrls: ['./ng-for-cmp.component.css']
})
export class NgForCmpComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  contacts = [
    { id: 0, name: 'aViem' },
    { id: 1, name: 'Tien' },
    { id: 2, name: 'Quang' },
    { id: 3, name: 'Bang' },
    { id: 4, name: 'Hung' },
    { id: 5, name: 'Trinh' },
    { id: 6, name: 'Phu' },
    { id: 7, name: 'Thoai' },
  ]
}
