import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/model/person';
import { IntegrationService } from 'src/app/servicios/integration.service';


@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  person:Person[]=[];
  
  constructor(private integration:IntegrationService) { }

  ngOnInit(): void {

      this.getPerson();

    }

    public getPerson(){
      this.integration.getPersonServ().subscribe(pers =>{
        console.log(pers);
        this.person=pers;
      })
    }
}
