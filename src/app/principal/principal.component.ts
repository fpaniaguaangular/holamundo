import { emitDistinctChangesOnlyDefaultValue } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Tarea } from '../tarea';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {

  tareas:Tarea[]=[];
  tareasFiltradas:Tarea[]=[];
  numeroTareas:number=0;
  constructor() { 
  }

  ngOnInit(): void {
  }

  agregarTarea():void {
    console.log("Agregando...");
    this.tareas.push(new Tarea("Tarea " + (this.numeroTareas+1),"10:00"));
    this.numeroTareas=this.tareas.length;
    this.tareasFiltradas = this.tareas;
  }
  eliminarTarea():void {
    console.log("Eliminando...");
    this.tareas.pop();
    this.numeroTareas=this.tareas.length;
    this.tareasFiltradas = this.tareas;
  }
  filtrar(prioridad:number):void {
    console.log("Filtrando prioridad " + prioridad + "...");
    this.tareasFiltradas = this.tareas.filter(tarea => tarea.prioridad >= prioridad);
    return;//Podría no existir esta sentencia
  }
}