import { Pipe, PipeTransform } from '@angular/core';
/*
 * Transform time in hh:mm format
 * Usage:
 *   time | transformMinutesToHours
 * Example:
 *   {{ 120 | transformMinutesToHours }}
 *   formats to: 2h
 *
 *   {{ 16 | transformMinutesToHours }}
 *   formats to: 16min
 *
 *   {{ 61 | transformMinutesToHours }}
 *   formats to: 1h 1min
*/
const MINUTE_IN_SEC: number = 60;
@Pipe({name: 'transformMinutesToHours'})

export class TransformMinutesToHoursPipe implements PipeTransform {
  public transform(time: number): string {
    if (time < MINUTE_IN_SEC) {
      return `${time}min`;
    }

    if (time % MINUTE_IN_SEC === 0) {
      return `${Math.floor(time / MINUTE_IN_SEC)}h`;
    }

    const hours: number = Math.floor(time / MINUTE_IN_SEC);
    const minutes: number = time % MINUTE_IN_SEC;

    return `${hours}h ${minutes}min`;
  }
}
