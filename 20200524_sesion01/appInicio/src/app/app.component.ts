import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appInicio';
  fruitsNames = ['apple', 'orange', 'pineapple', 'avocado'];
  valueFruitName: string;
  isEnabled = false;

  constructor() {
    for (let index = 0; index < this.fruitsNames.length; index++) {
      console.log(this.fruitsNames[index]);
    }

    this.fruitsNames.forEach( (name) => console.log(name));

    this.fruitsNames.forEach( this.loopFruitName );

    // Como Angular lo hace
    for (const fruitName of this.fruitsNames) {
      console.log(fruitName);
    }
  }

  loopFruitName(element) {
    console.log(element);
  }

  addNewFruitName() {
    // console.log('Nueva fruta añadida');
    // const newFruitName = 'Fruit' + this.fruitsNames.length + 1;

    if (this.valueFruitName === undefined ||
      this.valueFruitName.trim() === '' ) {
      return false;
    }
    this.fruitsNames.push(this.valueFruitName);
    console.log(this.fruitsNames);
  }

  captureFruitName(evt) {
    this.valueFruitName = evt.target.value;
    this.isEnabled = this.valueFruitName.trim() === '' ? false : true;
    console.log(this.valueFruitName);
  }

  removeFruitName(index: number) {
    this.fruitsNames.splice(index, 1);
    console.log('remove fruit name:' + index);
  }

  // crear un pequeño formulario de registro: Nombre, apellido, correo, contraseña + boton
}
