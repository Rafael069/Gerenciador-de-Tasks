import { 
	Directive, ElementRef, Input, OnInit 
} from '@angular/core';

@Directive({ 
	selector: '[tarefaConcluida]' 
})
export class TarefaConcluidaDirective implements OnInit  {
   
   // Fornecendo a situacao da Terfa
    @Input() tarefaConcluida: boolean;

    // O ElementRef é uma referencia html que quero adicionar no meu componente
    constructor(private el: ElementRef) {}

    ngOnInit() {
      if (this.tarefaConcluida) {
        this.el.nativeElement.style.textDecoration = "line-through";
      }
    }
}
