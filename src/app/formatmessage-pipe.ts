import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatmessage',
})
export class FormatmessagePipe implements PipeTransform {

  transform(message: string): string {
    let s:string = "Hello ".concat(message.toUpperCase());
    return s;
  }

}

