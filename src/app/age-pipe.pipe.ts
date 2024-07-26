import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agePipe'
})
export class AgePipePipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value > 18 ? value + " სრულწლოვანი" : value;
  }

}
