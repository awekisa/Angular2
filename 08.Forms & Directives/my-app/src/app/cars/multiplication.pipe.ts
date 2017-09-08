import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'multiply'
})
export class MultiplicationPipe implements PipeTransform {
  transform (value: number, times: string) {

    const timesAsNum = Number(times);
    const timesNumber = isNaN(timesAsNum) ? 1 : timesAsNum;
    return value * timesNumber;
  }
}