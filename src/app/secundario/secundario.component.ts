import { Component, OnInit } from '@angular/core';
import { Mision } from '../mision';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent implements OnInit {

  mision:Mision;
  misiones:Mision[];
  textoMision:string;

  constructor() {
    this.misiones = [];
    this.mision = { nombre:"", duracion:0 };
    this.textoMision ="";
  }

  ngOnInit(): void {
  }

  agregarMision():void {
    let nuevaMision:Mision = { nombre: this.mision.nombre, duracion: this.mision.duracion };
    this.misiones.push(nuevaMision);
    this.textoMision = `${this.mision.nombre}-${this.mision.duracion}`;
    console.log(this.textoMision);


    this.mision.nombre="";
    this.mision.duracion=0;
    
  }
}