import { EstadosTarea } from "./estados-tarea";

export class Tarea {
    static verbos:string[]=["Comprar","Alquilar","Vender","Reservar","Construir","Diseñar"];
    static sustantivos:string[]=["Coche","Piso","Ordenador","Apartamento","Película","Serie","Videojuego","Videoconsola"];
    //Atributos
    public nombre:string;
    descripcion:string;
    hora:string;
    prioridad:number;
    estado:EstadosTarea;
    private valor:number=10;
    readonly capacidad:number=15;
    private _criticidad:number;
    //Constructor
    constructor(nombre:string, hora:string);
    constructor(nombre:string, hora:string, descripcion:any);
    constructor(nombre:string, hora:string, descripcion?: any){
        this.nombre = nombre;
        if (descripcion===undefined){
            this.descripcion = Tarea.verbos[Math.floor(Math.random()*Tarea.verbos.length)] + " " + Tarea.sustantivos[Math.floor(Math.random()*Tarea.sustantivos.length)];
        } else {
            this.descripcion = descripcion;
        }
        this.hora = hora;
        this.prioridad = Math.round(Math.random()*10);
        this.estado = EstadosTarea.Asignada;
        this._criticidad = 10; 
    }
    //Métodos
    mostrar():void {
        console.log(`Nombre:${this.nombre}-Descripción:${this.descripcion}`);
    }
    getValor():number{
        return this.valor;
    }
    set criticidad(nuevoNivelCriticidad:number){
        console.log("Cambiando criticidad...");
        this._criticidad = nuevoNivelCriticidad;
    }
    get criticidad():number{
        console.log("Leyendo criticidad...");
        return this._criticidad;
    }
}
