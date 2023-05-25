import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Result } from '../interfaces/result.interface';

@Injectable({
  providedIn: 'root'
})
export class GutendexService {

  constructor(private http: HttpClient) { }

  getDataByPage(params: string, page:number): Observable<Result> {
    return this.http.get<Result>(`https://gutendex.com/books/?${params}&page=${page}`)
  }

  getDataById(id:number): Observable<Result> {
    return this.http.get<Result>(`https://gutendex.com/books/?ids=${id}`)
  }
}
