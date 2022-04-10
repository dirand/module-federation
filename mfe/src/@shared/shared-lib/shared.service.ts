import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { increment, decrement, reset } from '../../app/@store/counter.actions';

@Injectable()
export class SharedService {
  value = 'MFE value';

  constructor(private store: Store<{ count: number }>) {
    store.select('count').subscribe((count) => {
      this.value = `MFE: ${count}`;
    });
  }

  setValue(val: string): void {
    this.store.dispatch(increment());
  }
}
