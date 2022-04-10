import { Lib2Service } from './../lib2/lib2.service';
import { Injectable } from '@angular/core';

@Injectable()
export class Lib1Service {
  value = 'lib1';
  lib1Value = '';

  constructor(private readonly lib2Service: Lib2Service);
}
