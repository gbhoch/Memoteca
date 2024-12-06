import { Component, NgModule, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento-interface';

@Component({
  selector: 'app-editar-pensamento',
  templateUrl: './editar-pensamento.component.html',
  styleUrls: ['./editar-pensamento.component.css']
})
export class EditarPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(
    
  ) { }

  ngOnInit() {
  }

  editarPensamento(){}

  cancelar(){}

}
