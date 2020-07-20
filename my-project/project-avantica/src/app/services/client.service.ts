import { Injectable } from '@angular/core';
import { Client } from '../models/client.interface';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ClientService {
  clients: Observable<Client[]>;

  constructor(
    private readonly angularFire: AngularFirestore
  ) {
    this.list();
  }

  list(): any {
    this.clients = this.angularFire.collection('cliente').valueChanges();
    return this.clients;
  }
}
