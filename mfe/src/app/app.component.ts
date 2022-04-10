import { Lib2Service } from '@lib2';
import { Lib1Service } from '@lib1';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'mfe';
  constructor(
    public lib1Service: Lib1Service,
    public lib2Service: Lib2Service
  ) {}
}
