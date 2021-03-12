import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, mostrar:boolean): unknown {
    if(mostrar){ return value }
    
    const passArr = value.split('').map(cur=>'*')
    return passArr.join('');
  }


}
