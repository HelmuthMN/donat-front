import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {

    constructor(private http: HttpClient) { }
    
    retrieveCep(cep: string): Observable<any>{
        return this.http.get(`https://brasilapi.com.br/api/cep/v2/${cep}`)
    }

}