import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InstitutionRequest } from '../../model/institution.model';

const API_URL = environment.apiUrl + '/institution_request'

@Injectable({
  providedIn: 'root'
})
export class InstitutionRequestService {

  constructor(private http: HttpClient) { }

  getAllRequestInstitutions(): Observable<InstitutionRequest[]> {
    return this.http.get<InstitutionRequest[]>(`${API_URL}`, {withCredentials:true}).pipe(
      map(res => res),
      shareReplay()
    );;
  }

  createRequestInstitution(request: InstitutionRequest): Observable<any> {
    return this.http.post(`${API_URL}`, {request})
  }

  deleteRequestInstitution(id: string) {
    this.http.delete(`${API_URL}/${id}`, {withCredentials:true}).subscribe(() => "");
  }
}