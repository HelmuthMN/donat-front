import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RequestInstitution, RequestInstitutionGet} from '../../model/institution.model';

const API_URL = environment.apiUrl + '/institution_request'

@Injectable({
  providedIn: 'root'
})
export class InstitutionRequestService {

  constructor(private http: HttpClient) { }

  getAllRequestInstitutions(): Observable<RequestInstitutionGet[]> {
    return this.http.get<RequestInstitutionGet[]>(`${API_URL}`, {withCredentials:true}).pipe(
      map(res => res),
      shareReplay()
    );;
  }

  retrieveRequestInstitutitonImage(id: string): Observable<any>{
    return this.http.get(`${API_URL}/reqinstitution_image/${id}`, {responseType: 'blob' as 'json', withCredentials:true})
  }

  createRequestInstitution(request: RequestInstitution): Observable<any> {
    return this.http.post(`${API_URL}`, request)
  }

  createImageRequestInstitution(file: any, email: string): Observable<any> {
    const formData = new FormData(); 
    formData.append("email", email)
      // Store form name as "file" with file data
    formData.append("icon", file, file.name);

    return this.http.put(`${API_URL}`, formData)
  }

  deleteRequestInstitution(id: string) {
    this.http.delete(`${API_URL}/${id}`, {withCredentials:true}).subscribe(() => "");
  }
}