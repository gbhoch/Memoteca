import { ExluirPensamentoComponent } from './exluir-pensamento/exluir-pensamento.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pensamento } from './pensamento-interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoServiceService {

  private readonly API = 'http://localhost:3000/pensamentos'

  constructor(private http : HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.http.get<Pensamento[]>(this.API)    //Retorna a lista de Pensamentos que tem na API
  }

  criar(pensamento: Pensamento): Observable<Pensamento>{
    return this.http.post<Pensamento>(this.API, pensamento)
  }

  editar(pensamento : Pensamento): Observable<Pensamento>{
    const url = `${this.API}/${pensamento.id}`
    return this.http.put<Pensamento>(url, pensamento)
  }

  excluir(id: string): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.delete<Pensamento>(url)
  }

  buscarPorId(id: string): Observable<Pensamento>{
    const url = `${this.API}/${id}`
    return this.http.get<Pensamento>(url)
  }
}
