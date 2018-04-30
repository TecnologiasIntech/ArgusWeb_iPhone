import {LogInfo} from './log-info';

export interface Notification {
    accion:string
    descripcion:string
    fecha:string
    observacion:string
    semaforo:number
    supervisorResponsibility:boolean
    bitacoraInformacion:LogInfo
    informacion:any
}
