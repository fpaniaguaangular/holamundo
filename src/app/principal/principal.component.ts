import { Component, OnInit } from '@angular/core';
import { convertirAMayusculas } from '../funciones';
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
  cadenaBusqueda:string="";

  constructor() { 
  }

  ngOnInit(): void {
  }

  agregarTarea():void {
    console.log("Agregando...");
    this.tareas.push(new Tarea("Tarea " + (this.numeroTareas+1),"10:00"));
    //this.tareas.push(new Tarea("Tarea " + (this.numeroTareas+1),"10:00", "Descripción de la tarea"));
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
  filtrarPorDescripcion():void {
    console.log("Filtrando por descripcion " + this.cadenaBusqueda + "...");
    this.tareasFiltradas = this.tareas.filter(tarea => 
      convertirAMayusculas(tarea.descripcion).includes(convertirAMayusculas(this.cadenaBusqueda)));  
  }

  convertirAMayusculas():void {
    this.tareas.forEach(function(tarea){
      tarea.nombre=tarea.nombre.toUpperCase();      
    });
  }

  convertirAMinusculas():void {
    this.tareas.forEach(tarea => {
      tarea.nombre=tarea.nombre.toLowerCase();      
    });
  }
}

