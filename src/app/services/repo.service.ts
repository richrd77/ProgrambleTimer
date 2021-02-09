import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { Extensions } from './extensions';

@Injectable()
export class RepositoryService {
  constructor(private extensions: Extensions, private constants: Constants) {}

  GetTheme(): boolean {
    return this.extensions.ToBoolean(
      localStorage.getItem(this.constants.DarkModeKey)
    );
  }

  GetDataFromDevice<returnType>(localStorageKey: string): returnType {
    const data: returnType = JSON.parse(localStorage.getItem(localStorageKey));
    return data;
  }

  SetDataFromDevice<DataType>(localStorageKey: string, data: DataType): void {
    localStorage.setItem(localStorageKey, JSON.stringify(data));
  }
}
