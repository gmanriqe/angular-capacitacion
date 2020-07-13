import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // apiURL = 'https://fathomless-sea-38802.herokuapp.com/login';
  // // userLogged: false; // Cambiara el valor siempre y cuando el usuario este logeado
  // // onChangeStatusUser: Subject<boolean> = new Subject<boolean>(); // Para saber el estado del usuario
  // constructor( private readonly http: HttpClient) { }

  // login(user: User) {
  //   return this.http.post('apiURL', user);
  // }

  // logout() {}

  // isLogged() {}
}
