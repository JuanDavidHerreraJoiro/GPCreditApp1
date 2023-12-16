import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AbrirDialogoService } from './abrir-dialogo.service';

@Injectable({
  providedIn: 'root'
})
export class HandleHttpErrorService {

  constructor(private abrirDialogo: AbrirDialogoService) { }

  public handleError<T>(operation = 'operation', result?: T) {
    
    return (error: HttpErrorResponse): Observable<T> => {
      if(error.status !== 0) {
        var errorMensaje = error?.error.errors['ErrorServer'];
        if (errorMensaje) {
          var mensaje = `ERROR: ${errorMensaje}`;
          console.log(error);
          this.abrirDialogo.openSnackBar(mensaje, true);
        }
      }
        
      return of(result as T);
    };
  }

  public log(mensaje: string){
    this.abrirDialogo.openSnackBar(mensaje, false);
  }
}
