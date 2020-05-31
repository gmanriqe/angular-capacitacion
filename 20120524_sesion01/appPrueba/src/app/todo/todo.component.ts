import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  /**
   * @ ➡️ son decoradores
   * @Component() es un decorador de Clase, ya que agrega funcionalidad.
   * @Input() es un decorado de Propiedad.
   */
  @Input() entradaFruitName: string; // Hago el pase de información desde el componente padre hacia el hijo.
  @Input() entradaIndexFruitName: number;

  // onDeleteFruitName es el nombre del evento que ayudará a sacar el evento al padre.
  @Output() onDeleteFruitName = new EventEmitter();
  constructor() { }

  deleteFruitName() {
    this.onDeleteFruitName.emit(this.entradaIndexFruitName);
  }
}
