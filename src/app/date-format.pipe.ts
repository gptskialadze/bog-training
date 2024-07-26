import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
     return value.replaceAll("/", "-");
    // return value.split("/").join("-") -- მეორე ვარიანტი
  }

}
