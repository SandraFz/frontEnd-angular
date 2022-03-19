import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor() { }

  obtenerDatos() {
    console.log("El servicio está corriendo");
  }
}
