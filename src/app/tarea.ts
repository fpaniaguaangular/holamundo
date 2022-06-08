export class Tarea {
    verbos:string[]=["Comprar","Alquilar","Vender","Reservar","Construir","Diseñar"];
    sustantivos:string[]=["Coche","Piso","Ordenador","Apartamento","Película","Serie","Videojuego","Videoconsola"];
    //Atributos
    nombre:string;
    descripcion:string;
    hora:string;
    prioridad:number;
    //Constructor
    constructor(nombre:string, hora:string){
        this.nombre = nombre;
        this.descripcion = this.verbos[Math.floor(Math.random()*this.verbos.length)] + " " + this.sustantivos[Math.floor(Math.random()*this.sustantivos.length)];
        this.hora = hora;
        this.prioridad = Math.round(Math.random()*10);   
    }
    //Métodos
    
}
