import { Component, OnInit } from '@angular/core';
import { Pensamento } from '../pensamento-interface';
import { PensamentoServiceService } from '../pensamento-Service.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';

@Component({
  selector: 'app-exluir-pensamento',
  templateUrl: './exluir-pensamento.component.html',
  styleUrls: ['./exluir-pensamento.component.css']
})
export class ExluirPensamentoComponent implements OnInit {

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: ''
  }

  constructor(private service: PensamentoServiceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const idNum = Number(id); // Converte o id para número
      if (!isNaN(idNum)) {
        this.service.buscarPorId('idNum').subscribe((pensamento) => {
          this.pensamento = pensamento;
        });
      } else {
        // Trate caso o id não seja um número válido
        console.error('ID inválido');
      }
    } else {
      console.error('ID não encontrado na URL');
    }
  }

  excluirPensamento() {
    if(this.pensamento.id) {
      this.service.excluir(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/listarPensamento'])
      })
    }
  }

  cancelar() {
    this.router.navigate(['/listarPensamento'])
  }

}
