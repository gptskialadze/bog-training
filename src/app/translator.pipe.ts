import { Pipe, PipeTransform } from '@angular/core';
import { dictionaryData } from './translates';

@Pipe({
  name: 'translator'
})
export class TranslatorPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    const realData: any = dictionaryData.find((elem: any) => elem.key == value);
    return realData ? realData['value'] : value
  }

}
