import { Routes } from '@angular/router';
import { AlunosAtivos } from './alunos-ativos/alunos-ativos';
import { FichaTreino } from './ficha-treino/ficha-treino';

export const routes: Routes = [
    { path: '', component: AlunosAtivos},
    {path: 'ficha', component: FichaTreino}
];
