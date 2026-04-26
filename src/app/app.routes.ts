import { Routes } from '@angular/router';
import { FichaTreino } from './componentes/ficha-treino/ficha-treino';
import { AlunoList } from './componentes/aluno-list/aluno-list';
import { PlanoList } from './componentes/plano-list/plano-list';
import { MatriculaList } from './componentes/matricula-list/matricula-list';
import { Chekin } from './componentes/chekin/chekin';

export const routes: Routes = [
    { path: '', component: Chekin},
    {path: 'ficha', component: FichaTreino},
    {path: 'aluno', component: AlunoList},
    {path: 'plano', component: PlanoList},
    {path: 'matricula', component: MatriculaList},
    
];
