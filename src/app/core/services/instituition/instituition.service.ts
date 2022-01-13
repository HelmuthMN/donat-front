import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Instituition } from 'src/app/model/instituition.model';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + '/instituicao'

@Injectable({
  providedIn: 'root'
})
export class InstituitionService {

  constructor(private http: HttpClient) { }

  getInstituition(email: string): Observable<Instituition> {
    return this.http.get<Instituition>(`${API_URL}/${email}`)
  }

  getAllInstituitions(): Observable<Instituition> {
    return this.http.get<Instituition>(`${API_URL}`)
  }
}
