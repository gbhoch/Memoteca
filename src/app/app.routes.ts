import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

import { ExluirPensamentoComponent } from './componentes/pensamentos/exluir-pensamento/exluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

export const routes: Routes = [
{ path: '', component: ListarPensamentoComponent},
{ path: 'criarPensamento', component: CriarPensamentosComponent},
{ path: 'listarPensamento', component: ListarPensamentoComponent},
{ path: 'pensamentos/exluirPensamento/:id', component: ExluirPensamentoComponent},
{ path: 'pensamentos/editarPensamento/:id', component: EditarPensamentoComponent}
];
