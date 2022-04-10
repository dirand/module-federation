import { SharedService } from '@shared';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-page',
  templateUrl: 'default.component.html',
})
export class DefaultComponent implements OnInit {
  constructor(public readonly sharedService: SharedService) {}

  ngOnInit() {}
}
