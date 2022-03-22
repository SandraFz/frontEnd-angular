import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsList:any;
  constructor(private datosPorfolio:ServicioService) { }

  ngOnInit(): void { 
    this.datosPorfolio.obtenerDatos().subscribe(data => {
      this.projectsList = data.projects;
    })
  }

}
