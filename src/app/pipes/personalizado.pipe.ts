import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalizado'
})
export class PersonalizadoPipe implements PipeTransform {
  // podmeos capturas los parametros usando ...args: unknown[]
  // o ta,bien podemos usar variables como:
  transform(nombre: string, edad:number, nick:string): string {
    return `hello ${nombre} you have ${edad} and are ${nick}`
  }

}
