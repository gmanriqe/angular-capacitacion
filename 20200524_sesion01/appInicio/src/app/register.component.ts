import { Component } from '@angular/core';

// decoradores: "antepone @" Son métodos, que agregan funcionalidades
@Component({
  // Angular solo utiliza 3 tipos de selectores
  // backstick permite el multilinea y tambien insertar valores (template)
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  title = 'Course Angular';
  date = new Date();
  // todas las clases puedes tener un método constructor
  // cuando te digan, crear un componente significa: instancia de una clase
  constructor() {
    setInterval( () => {
      this.date = new Date();
    }, 1000);
  }
}
