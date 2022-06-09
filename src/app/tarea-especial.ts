import { Tarea } from "./tarea";

export class TareaEspecial extends Tarea{
    nivelMinimoPrivilegio:number;
    constructor($nombre:string, $hora:string, $nivelMinimoPrivilegio:number){
        super($nombre,$hora);
        this.nivelMinimoPrivilegio=$nivelMinimoPrivilegio;
    }
}
