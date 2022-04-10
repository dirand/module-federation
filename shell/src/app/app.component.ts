import { SharedService } from '@shared';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'shell';

  constructor(readonly sharedService: SharedService) {}
  onClick(): void {
    this.sharedService.setValue(new Date().toISOString());
  }
}
