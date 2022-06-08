import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secundario',
  templateUrl: './secundario.component.html',
  styleUrls: ['./secundario.component.css']
})
export class SecundarioComponent implements OnInit {

  nombre:string;
  duracion:number;

  misiones:string[];

  constructor() { 
    this.misiones = [];
    this.nombre = "";
    this.duracion = 0;
  }

  ngOnInit(): void {
  }

  agregarMision():void {
    this.misiones.push(this.nombre);
    this.nombre="";
    this.duracion=0;
  }

}
