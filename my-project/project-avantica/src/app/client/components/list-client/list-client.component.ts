import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  listClients: [];
  columnsToDisplay = [
    'nombre',
    'apellidoMaterno',
    'apellidoPaterno',
    'edad',
    'fechaNacimiento',
    'actions'
  ];

  constructor(
    private readonly clientService: ClientService
  ) {
  }

  ngOnInit(): void {
    this.list();
  }

  list(): void {
    this.clientService.list().subscribe((dataClient: any) => {
    this.listClients = dataClient;
    console.log(dataClient);
  });
  }
}
