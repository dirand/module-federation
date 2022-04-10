import { Injectable } from '@angular/core';
import { Lib1Service } from '@lib1';

@Injectable()
export class Lib2Service {
  value = 'lib1';
  lib1Value = '';

  constructor(private readonly lib1Service: Lib1Service) {
    this.lib1Value = this.lib1Service.value;
  }
}
