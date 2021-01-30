import { Injectable } from '@angular/core';

@Injectable()
export class Extensions {
  ContiansItem<T>(
    lst: T[],
    obj: T,
    equalityFunction: (a: T, b: T) => boolean
  ): boolean {
    if (lst.length > 0) {
      return lst.filter((k) => equalityFunction(k, obj)).length > 0;
    }
    return false;
  }
}
