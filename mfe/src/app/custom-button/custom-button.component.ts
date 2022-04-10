import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from '@shared';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrls: ['./custom-button.component.scss'],
})
export class CustomButtonComponent implements OnInit {
  @Input() title = '';
  constructor(private readonly sharedService: SharedService) {}

  ngOnInit(): void {}
  onClick(): void {
    this.sharedService.setValue(new Date().toISOString());
  }
}
