import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../../model/user/user.model';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  upload(file : any): Observable<any> {
  
      // Create form data
      const formData = new FormData(); 
      
      // Store form name as "file" with file data
      formData.append("icon", file, file.name);
        
      // Make http post request over api
      // with formData as req
      return this.http.put(`${API_URL}/profile_image`, formData, {withCredentials:true})
  }

  retrieveImage(): Observable<any>{
    return this.http.get(`${API_URL}/profile_image`, {responseType: 'blob' as 'json', withCredentials:true})
  }

  getLoggedUser(): Observable<any>{
    return this.http.get<any>(`${API_URL}/get_logged_user`, {withCredentials:true})
  }
}
