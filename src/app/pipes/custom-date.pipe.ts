import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Extensions } from '../services/extensions';
import { SettingService } from '../services/setting.service';

@Pipe({
  name: 'customDate',
})
export class CustomDatePipe extends DatePipe implements PipeTransform {
  constructor(private ext: Extensions, private settings: SettingService) {
    super(settings.TimeZoneLocale);
  }
  transform(value: any, args?: any): any {
    const r = this.ext.GetRelativeDate(new Date(value));
    if (r.isInRange) {
      return r.parseDate();
    }
    return super.transform(value, 'd MMM y @ h:mm a');
  }
}
