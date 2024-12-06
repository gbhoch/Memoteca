import { CommonModule, NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento-interface';
import { PensamentoServiceService } from '../pensamento-Service.service';

@Component({
  selector: 'app-criar-pensamentos',
  standalone: true,
  imports: [CommonModule, FormsModule /*RouterLink*/],
  templateUrl: './criar-pensamentos.component.html',
  styleUrl: './criar-pensamentos.component.css'
})
export class CriarPensamentosComponent {
  pensamento : Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private service: PensamentoServiceService, private router: Router){

  }

  criarPensamento(){
    this.service.criar(this.pensamento).subscribe(() => {
      this.router.navigate(['/listaPensamento'])
    })
  }

  cancelar(){
    this.router.navigate(['/listaPensamento'])
  }
}
