import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPrueba';
  fruitList = ['platano', 'mandarina', 'mango', 'sandia'];
  newValueFruitName: string;
  isEnabled = false; // isEnabled = habilitado

  addNewFruitName() {
    if (this.newValueFruitName === undefined || this.newValueFruitName.trim() === '') {
      return false; // significa que el codigo de esta función termina en esta linea, ya no se ejecuta lo demas
    }
    this.fruitList.push(this.newValueFruitName);
    console.log(this.newValueFruitName);
    // const newFruit = 'Nueva Fruta ' + (this.fruitList.length + 1);
    // console.log(newFruit);
  }

  captureFruitName(evt) {
    this.newValueFruitName = evt.target.value; // captura de la cadena que coloque en el input
    this.isEnabled = this.newValueFruitName.trim() === '' ? false : true; // activar el boton siempre y cuando sea diferente a vacío
  }

  removeFruitName(index: number) {
    this.fruitList.splice(index, 1);
    console.log('remove fruit name' + index);
  }
}
