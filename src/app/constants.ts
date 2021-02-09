import { Injectable } from '@angular/core';

@Injectable()
export class Constants {
  get DarkModeKey(): string {
    return 'isDark';
  }

  get RoutineKey(): string {
    return 'routine';
  }
}
