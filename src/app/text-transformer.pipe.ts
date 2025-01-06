import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textTransformer'
})
export class TextTransformerPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.substring(0, 1).toUpperCase() + value.substring(1, value.length) + args[0];
  }

}
