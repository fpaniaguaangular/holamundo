export class Tarea {
    static verbos:string[]=["Comprar","Alquilar","Vender","Reservar","Construir","Diseñar"];
    static sustantivos:string[]=["Coche","Piso","Ordenador","Apartamento","Película","Serie","Videojuego","Videoconsola"];
    //Atributos
    nombre:string;
    descripcion:string;
    hora:string;
    prioridad:number;
    //Constructor
    constructor(nombre:string, hora:string, descripcion?: any){
        this.nombre = nombre;
        if (descripcion===undefined){
            this.descripcion = Tarea.verbos[Math.floor(Math.random()*Tarea.verbos.length)] + " " + Tarea.sustantivos[Math.floor(Math.random()*Tarea.sustantivos.length)];
        } else {
            this.descripcion = descripcion;
        }
        this.hora = hora;
        this.prioridad = Math.round(Math.random()*10);   
    }
    //Métodos
    
}
