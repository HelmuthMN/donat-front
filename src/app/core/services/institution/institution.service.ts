import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap, throwError } from 'rxjs';
import { Institution } from 'src/app/core/model/institution.model';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + '/instituicao'

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private http: HttpClient) { }

  getInstitutionByID(id: string): Observable<Institution> {
    return this.http.get<Institution>(`${API_URL}/${id}`, {withCredentials:true});
  }

  getAllInstitutions(): Observable<Institution[]> {
    return this.http.get<Institution[]>(`${API_URL}`, {withCredentials:true});
  }
}
