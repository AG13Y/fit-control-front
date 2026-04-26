import { Component } from '@angular/core';
import { AlunoResponse } from '../../models/aluno_model';
import { AlunoService } from '../../Service/AlunoService';

@Component({
  selector: 'app-aluno-list',
  imports: [],
  templateUrl: './aluno-list.html',
  styleUrl: './aluno-list.scss',
})
export class AlunoList {
  alunos: AlunoResponse[] = [];

  constructor(private service: AlunoService) {}

  ngOnInit(): void {
    this.carregarAlunos();
  }

  carregarAlunos() {
    this.service.listAll().subscribe(res => this.alunos = res);
  }

  deletar(id: number) {
    if(confirm('Deseja realmente excluir este aluno?')) {
      this.service.delete(id).subscribe(() => this.carregarAlunos());
    }
  }
}
