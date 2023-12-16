import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, tap } from 'rxjs';
import { environment } from 'src/environment/environment';
import { Cliente } from '../classes/cliente';
import { HandleHttpErrorService } from 'src/app/shared/services/handle-http-error.service';
import { ResponseModel } from 'src/app/shared/classes/response';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  baseUrl: string;

  constructor(
    private http: HttpClient,
    private handleError: HandleHttpErrorService
  ) {
    this.baseUrl = environment.baseUrl;
  }

  get():Observable<ResponseModel<Cliente[]>>{
    return this.http.get<ResponseModel<Cliente[]>>(`${this.baseUrl}/Client`)
    // .pipe(
    //   catchError(this.handleError.handleError<ResponseModel<Cliente[]>>('Consulta Cliente'))
    // )
    ;
  }

  getCliente(id:number):Observable<Cliente>{
    return this.http.get<Cliente>(`${this.baseUrl}/Client/${id}`)
    .pipe(
      catchError(this.handleError.handleError<Cliente>('Consulta Cliente'))
    );
  }

  getRuta(rutaId:number):Observable<Cliente[]>{
    return this.http.get<Cliente[]>(`${this.baseUrl}/Client/ruta/${rutaId}`)
    .pipe(
      catchError(this.handleError.handleError<Cliente[]>('Consulta Cliente Ruta'))
    );
  }

  post(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(`${this.baseUrl}/Client`,cliente)
    .pipe(
      tap(_=>this.handleError.log('Cliente registrado correctamente.')),
      catchError(this.handleError.handleError<Cliente>('Registrar Cliente'))
    )
  }
}
