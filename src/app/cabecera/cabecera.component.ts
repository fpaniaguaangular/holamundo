import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {
  fecha:string;//Atributo
  titulo:string="Mi web";
  numeroVisitas:number;
  contadorSegundos:number;
  temporizador:any;
  
  constructor() {
    console.log("Constructor...");
    this.fecha="07/06/2022";
    this.numeroVisitas=10;
    this.contadorSegundos=0;
    this.temporizador = setInterval(()=>{
      this.contadorSegundos++;
    },1000);
  }

  ngOnInit(): void {
    console.log("ngOnInit...");
  }

  pararContador(){
    clearInterval(this.temporizador);
  }
}
