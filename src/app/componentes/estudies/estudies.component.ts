import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-estudies',
  templateUrl: './estudies.component.html',
  styleUrls: ['./estudies.component.css']
})
export class EstudiesComponent implements OnInit {
  educFormal:any;
  otrosCursos:any;
  constructor(private datosServicios:ServicioService) { }

  ngOnInit(): void {
    this.datosServicios.obtenerDatos().subscribe(data => {
      console.log(data);
      this.educFormal=data.estudios.estudiosForm;
    })
  }

}
