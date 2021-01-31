import { Injectable } from '@angular/core';
import { Color } from '../model/color';

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

  rgba2hex(orig: Color): string {
    let r: string = String(orig.r);
    let g: string = String(orig.g);
    let b: string = String(orig.b);
    let a = '0.8';
    r = Number(r).toString(16);
    g = Number(g).toString(16);
    b = Number(b).toString(16);
    a = Math.round(Number(a) * 255).toString(16);

    if (r.length === 1) {
      r = '0' + r;
    }
    if (g.length === 1) {
      g = '0' + g;
    }
    if (b.length === 1) {
      b = '0' + b;
    }
    if (a.length === 1) {
      a = '0' + a;
    }

    return '#' + r + g + b;// + a;
  }
}
