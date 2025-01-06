import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe'
})
export class MyPipePipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    return value.substring(0, args[0])
  }

}
