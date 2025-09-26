import { Injectable } from '@angular/core';
; // adapte le chemin si besoin
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../../assets/api/category';
import { ResultRequest } from '../models/result-request';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private urlApi: string = environment.serverUrl.categories;

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ResultRequest<Category>> {
    return this.http.get<ResultRequest<Category>>(this.urlApi);
  }
}

