import { Router } from '@angular/router';
import { CadastroService } from './../cadastro.service';
import { Cadastro } from '../cadastro.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-create',
  templateUrl: './cadastro-create.component.html',
  styleUrls: ['./cadastro-create.component.css'],
})
export class CadastroCreateComponent implements OnInit {
  cadastro: Cadastro = {
    usuario: '',
    senha: '',
  };

  constructor(
    private cadastroService: CadastroService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  createCadastro(): void {
    this.cadastroService.create(this.cadastro).subscribe(() => {
       this.router.navigate(['cadastro/tabela']);
    });
  }
  cancelCadastro(): void {
    this.router.navigate(['']);
  }
  tabelaCadastro(): void {
    this.router.navigate(['cadastro/tabela']);
  }
}
