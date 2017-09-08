import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'enginePipe'
})
export class EnginePipe implements PipeTransform {
  transform (value: string) {
    return value + ' Piped Things';
  }
}