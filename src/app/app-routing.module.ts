// ROTAS DE NAVEGAÇÃO PRINCIPAL

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {TarefaRoutes} from './tarefas';

// Lista de rotas
export const routes: Routes = [


{ 
	// Se a URL for padrão ele dá redirectTo para /tarefas/listar
		path: '', 
		redirectTo: '/tarefas/listar', 
		pathMatch: 'full' 
},
		

// ... : Operador do TypeScript que permite
// Concatenar arrays
  ...TarefaRoutes
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
