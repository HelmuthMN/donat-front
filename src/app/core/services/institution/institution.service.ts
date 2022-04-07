import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, shareReplay, tap, throwError } from 'rxjs';
import { Institution, InstitutionGet, RequestInstitution } from 'src/app/core/model/institution.model';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + '/instituicao'

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private http: HttpClient) { }

  getInstitutionByID(id: string): Observable<InstitutionGet> {
    return this.http.get<InstitutionGet>(`${API_URL}/${id}`, {withCredentials:true});
  }

  getAllInstitutions(): Observable<InstitutionGet[]> {
    return this.http.get<InstitutionGet[]>(`${API_URL}`, {withCredentials:true}).pipe(
      map(res => res),
      shareReplay()
    );;
  }

  createInstitution(email: string): Observable<any> {
    return this.http.post(`${API_URL}`, {
      email: email,
    }, {withCredentials:true});
  }

  retrieveImage(id: string): Observable<any>{
    return this.http.get(`${API_URL}/get_image/${id}`, {responseType: 'blob' as 'json', withCredentials:true})
  }
}
