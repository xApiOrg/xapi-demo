import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'formatHours' })
export class FormatHoursPipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      if (+value === 1) {
        return '1 hour';
      } else if (1 < +value && +value < 24) {
        return value + ' hours';
      } else if ( 23 < +value && + value < 48 ) {
        return '1 day';
      } else {
        return Math.floor((+value / 24)) + ' days';
      }
    } else {
      return '';
    }
  }
}
