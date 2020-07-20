import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../../services/client.service';
import { MatDialog } from '@angular/material/dialog';
import { FormClientComponent } from '../form-client/form-client.component';

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.css']
})
export class ListClientComponent implements OnInit {
  listClients: [];
  columnsToDisplay = [
    'nombre',
    'apellidoPaterno',
    'apellidoMaterno',
    'edad',
    'fechaNacimiento',
    'actions'
  ];

  constructor(
    private readonly clientService: ClientService,
    private readonly dialog: MatDialog
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

  openForm(): void {
    this.dialog.open(FormClientComponent, {
      panelClass: 'container-form',
      disableClose: true,
    });
  }
}
