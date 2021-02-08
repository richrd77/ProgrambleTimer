import { Injectable } from '@angular/core';
import { Extensions } from './extensions';

@Injectable()
export class SaverService {
  constructor(private extensions: Extensions) {}

  IsDarkModeOn(): boolean {
    return this.extensions.ToBoolean(localStorage.getItem('isDark'));
  }
}
