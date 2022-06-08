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
  
  constructor() {
    console.log("Constructor...");
    this.fecha="07/06/2022";
    this.numeroVisitas=10;
  }

  ngOnInit(): void {
    console.log("ngOnInit...");
  }
}
