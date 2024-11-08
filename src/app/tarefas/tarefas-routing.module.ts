import { Routes } from '@angular/router';

import { ListarTarefaComponent } from './listar';
import { CadastrarTarefaComponent } from './cadastrar';
import { EditarTarefaComponent } from './editar';

export const TarefaRoutes: Routes = [
	{ 
		path: 'tarefas', 
		redirectTo: 'tarefas/listar' 
	},
	//Se eu tiver na minha url o tarefas/listar
	//Direciono pro ListarTarefaComponent
	{ 
		path: 'tarefas/listar', 
		component: ListarTarefaComponent 
	}, 
	{ 
		path: 'tarefas/cadastrar', 
		component: CadastrarTarefaComponent 
	},
	{ 
		path: 'tarefas/editar/:id', 
		component: EditarTarefaComponent 
	}
];