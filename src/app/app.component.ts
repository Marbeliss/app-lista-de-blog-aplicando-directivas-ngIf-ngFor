import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Registro de usuario';
  mensaje = "";
  registrado = false;
  nombre: string = "";
  cargo:string="";
  apellido: string = "";
  entradas:Array<{titulo:string}>;




  constructor(){
    this.entradas=[

      {titulo:"Python cada dia mas presente"},
      {titulo:"Java presente desde hace mas de 20 años"},
      {titulo:"Java cada vez mas funcional"},
      {titulo:"Kotlin potencia para tus apps"},
      {titulo:"Donde queda pascal?"},
    ]

  }

    registrarUsuraio(){

      this.registrado= true
    this.mensaje="usuario registrado existo"

    }

}

