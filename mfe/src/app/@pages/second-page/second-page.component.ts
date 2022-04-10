import { SharedService } from '@shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-page',
  templateUrl: 'second-page.component.html',
})
export class SecondPageComponent implements OnInit {
  constructor(public readonly sharedService: SharedService) {}

  ngOnInit() {}
}
