import { ComponentType } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbrirDialogoService {

  constructor(
    private snackBar: MatSnackBar,
    public dialog: MatDialog) 
    { }

  openSnackBar(mensaje: string, error: boolean) {

    var clase: string = '';

    clase = error ? 'dialog-error': 'dialog-success';

    this.snackBar.open(mensaje, 'Ok', {
      verticalPosition: 'top',
      horizontalPosition: 'end',
      panelClass: ['dialog-general', clase],
      duration: 4000,
    });
  }

  openDialog(component: ComponentType<any>, data?: any): Observable<any> {
    const dialogRef = this.dialog.open(component, data);

    return dialogRef.afterClosed()
      .pipe(
        tap ( respuesta =>  respuesta )
      );
  }

}
