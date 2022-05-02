import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, shareReplay } from 'rxjs';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + '/get_boleto'

@Injectable({
  providedIn: 'root'
})
export class BoletoService {

  constructor(private http: HttpClient) { }

  getBoleto(
    userName: string,
    institutionName: string,
    boletoValue: number
  ): Observable<any> {
    return this.http.get<any>(`${API_URL}`, {
      withCredentials: true, 
      responseType: 'blob' as 'json',
      params:
      { 
        user: userName,
        institution: institutionName,
        value: boletoValue}
      },
      ).pipe(
        map(res => res),
        shareReplay()
    )
  }
}
