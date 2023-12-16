import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
//import Swal from 'sweetalert2';
import { AuthenticationService } from '../../services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  myForm: FormGroup = this.fb.group({
    userName: ['', Validators.required],
    password: ['', Validators.required]
  })

  hide: boolean = true;

  constructor(private fb: FormBuilder, private authService: AuthenticationService,
    private router: Router) {}
  
  fieldIsValid(field: string): boolean | undefined {
    return this.myForm?.get(field)?.invalid &&
      this.myForm?.get(field)?.touched;
  }

  ngOnInit() {
    
  }

  login() { 
    if (this.myForm.invalid) {
      this.myForm.markAllAsTouched();
      return;
    }

    const { userName, password } = this.myForm.value;

    this.authService.login(userName, password)
      .subscribe(resp => {
        if (resp.successed) {
          var route = resp.data.role === 'Admin' ? '/cliente/consultar-cliente' : '/inicio-cliente';

          this.router.navigate([route])
        } else {
          //Swal.fire('Error de inicio de sesión', resp.error.message, 'error');
        }
      })
  }
}
