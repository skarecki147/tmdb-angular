import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minToHours',
  standalone: true,
  pure: true
})
export class MinToHoursPipe implements PipeTransform {

  transform(value: number): string {
    const hours = Math.floor(value / 60)
    const minutes = Math.floor(value % 60)

    return (value < 60 ? '' : `${hours} hrs, `) + `${minutes} min.`;
  }

}
