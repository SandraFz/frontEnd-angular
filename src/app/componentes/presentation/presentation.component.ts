import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(private datosPorfolio:ServicioService) { }

  ngOnInit(): void {
    this.datosPorfolio.obtenerDatos();
  }

}
