import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoResponse } from '../models/aluno_model';


@Injectable({ providedIn: 'root' })
export class AlunoService {
  private readonly API = 'http://localhost:8080/alunos';

  constructor(private http: HttpClient) {}

  listAll(): Observable<AlunoResponse[]> {
    return this.http.get<AlunoResponse[]>(this.API);
  }

  create(aluno: AlunoResponse): Observable<AlunoResponse> {
    return this.http.post<AlunoResponse>(this.API, aluno);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.API}/${id}`);
  }
}