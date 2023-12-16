import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../classes/cliente';
import { ClienteService } from '../../services/cliente.service';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  clientes!: Cliente[];

  constructor(private clienteService: ClienteService) {}

  ngOnInit() {
    this.consultarClientes();
  }

  consultarClientes() {
    this.clienteService.get()
      .subscribe(response => {
        this.clientes = response.data        
      });
  }
}
