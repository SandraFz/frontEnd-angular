import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../model/person';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IntegrationService {

  url:string=environment.baseUrl;

  constructor(private http:HttpClient) { }

  /**
   * getPersonServ
   */
  public getPersonServ():Observable<any> {
    return this.http.get<Person[]>(this.url);
  }

}
