import { Component, OnInit } from '@angular/core';
import { ValidacionService } from 'src/app/shared/services/validacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cliente } from '../../classes/cliente';
import { ClienteService } from '../../services/cliente.service';
import { AuthenticationService } from 'src/app/features/authentication/sesion/services/authentication.service';
import { User } from 'src/app/features/authentication/sesion/classes/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})

export class RegistrarClienteComponent implements OnInit {

  cliente = new Cliente();
  user!: User | null;

  miFormulario: FormGroup = this.fb.group({
    documentType: ['', [Validators.required]],
    identification: ['', [Validators.required, Validators.pattern(this.vs.numeroPattern)]],
    name: ['', [Validators.required, Validators.minLength(3)]],
    lastName: ['', [Validators.required, Validators.minLength(3)]],
    phone: ['', [Validators.required, Validators.pattern(this.vs.numeroPattern)]],
    address: ['', [Validators.required]],
    email: ['', [Validators.required]],
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    confirmPassword: ['', [Validators.required, Validators.pattern(this.vs.passwordPattern)]]
  }, {
    validators: [this.vs.camposIguales('password', 'confirmPassword')]
  });

  hide: boolean = true;
  userLogged: boolean;

  constructor(private fb: FormBuilder,
    public vs: ValidacionService,
    private clienteService: ClienteService,
    private authService: AuthenticationService,
    private router: Router) {
    this.userLogged = false;
     }

  ngOnInit(): void {
    this.vs.recibirForm(this.miFormulario);
    this.authService.currentUser.subscribe(u => {
      this.userLogged = u !== null;
      this.user = u;
    });
  }

  cancelar() {
    var route = '/auth/sesion/login';
    this.router.navigate([route])
  }

  guardar() {

    if (this.miFormulario.invalid || this.miFormulario.pending) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.cliente = { ...this.miFormulario.value };

    this.clienteService.post(this.cliente)
      .subscribe(cliente => {
        if (cliente) {
          this.miFormulario.reset();
        }
      });
  }
}
