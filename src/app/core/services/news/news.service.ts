import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { News } from 'src/app/model/news.model';
import { environment } from 'src/environments/environment';

const API_URL = environment.apiUrl + '/news'

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getAllNews(): Observable<News> {
    return this.http.get<News>(`${API_URL}`);
  }

  getNews(state: string): Observable<News> {
    return this.http.get<News>(`${API_URL}/${state}`)
  }
}
