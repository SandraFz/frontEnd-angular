import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/servicios/servicio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  portfolioServProy: any;
  constructor(private datosPortfolio:ServicioService) { }

  ngOnInit(): void {
    
    this.datosPortfolio.obtenerDatos().subscribe(data => {
      console.log(data);
      this.portfolioServProy=data.proyectos;
    });
    
  }

  

}
