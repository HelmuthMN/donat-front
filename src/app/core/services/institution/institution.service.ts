import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, shareReplay, tap, throwError } from 'rxjs';
import { Institution, InstitutionGet } from 'src/app/core/model/institution.model';
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

  createInstitution(name: string, email: string, address: string, cep: string, url: string, image: string, phone_number: string): Observable<any> {
    return this.http.post(`${API_URL}`, {
      name: name,
      email: email,
      address: address,
      cep: cep,
      url: url,
      image: image,
      phone_number: phone_number
    }, {withCredentials:true});
  }
}
