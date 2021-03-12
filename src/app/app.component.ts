import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre      : string    = 'Capitan America'
  nombre2     : string    = 'jimy'
  arreglo     : number[]  = [1,2,3,4,5,6,7]
  PI          : number    = Math.PI
  porcentaje  : number    = 0.3435
  salario     : number    = 2000.00

  heroe       : any       = {
                              nombre:'Logan',
                              clave:'wolvering',
                              edad:500
                            }
  fecha       : Date      = new Date()

  idioma      : string    = 'en'
  videoUrl    : string    = "https://www.youtube.com/embed/DEfzHcf4m9k"

  password    : string    = 'esta es mi contrasenia, please shhhh!!!'
  show        : boolean   = false

  valorPromesa = new Promise((resolve,reject)=>{
    setTimeout(() => {
      console.log('la promesa fue resuelta');
      resolve('all is ok')
    }, 5000);
  })

  cambiarIdioma(idioma:string){
    console.log('cambiar idioma');
    this.idioma = idioma
  }
}
