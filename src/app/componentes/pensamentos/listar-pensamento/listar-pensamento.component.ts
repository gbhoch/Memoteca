import { Component, isStandalone } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from "../pensamento/pensamento.component";
import { CommonModule, NgFor } from '@angular/common';
import { Pensamento } from '../pensamento-interface';
import { HttpClientModule } from '@angular/common/http';
import { PensamentoServiceService } from '../pensamento-Service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [RouterLink, PensamentoComponent, NgFor, CommonModule, HttpClientModule],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.css'
})
export class ListarPensamentoComponent {
  listaPensamento : Pensamento[] = [];

  constructor(private service: PensamentoServiceService){ }     //  Método PensamentoServiceService injetado, para ter acesso a todos os métodos do Service

  ngOnInit(): void{
    this.service.listar().subscribe((listaPensamento) => {      //  ngOnInit -> Todos componentes que precisam ser executados assim que o Componente é carregado, vão aqui.
      this.listaPensamento = listaPensamento
    });
  }


}
