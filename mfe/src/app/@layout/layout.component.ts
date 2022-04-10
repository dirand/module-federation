import { Store } from '@ngrx/store';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  value = '';
  constructor(private store: Store<{ count: number }>) {
    store.select('count').subscribe((count) => {
      this.value = `MFE: ${count}`;
    });
  }

  ngOnInit() {}
}
