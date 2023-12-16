import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MyErrorStateMatcher } from '../classes/myErrorStateMatcher';
import { errorMessages } from '../classes/error-forms-message';

@Injectable({
  providedIn: 'root'
})
export class ValidacionService {

  miFormulario?: FormGroup;
  matcher: MyErrorStateMatcher;

  correoPattern: string = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  numeroPattern: string = '^[0-9]*$';
  decimalPattern: string = '^[0-9.]*$';
  passwordPattern: string = '';

  constructor() {
    this.matcher = new MyErrorStateMatcher();
  }

  recibirForm(formulario: FormGroup) {
    this.miFormulario = formulario;
  }

  campoEsValido(campo: string): boolean | undefined {
    return this.miFormulario?.get(campo)?.invalid &&
      this.miFormulario?.get(campo)?.touched;
  }

  getMensaje(campo: string): string {
    const errorControl = this.miFormulario?.get(campo)?.errors;

    const errorKey = Object.keys(errorControl!)[0];
    const errorMessage = errorMessages[errorKey as keyof typeof errorMessages];

    if (errorControl) {
      if (errorKey === 'pattern')
        return this.getErrorPatternMessage(errorControl, errorKey);

      return errorMessage;
    }

    return '';
  }

  getErrorPatternMessage(errorControl: ValidationErrors, errorKey: string): string{
    var errorMessage;
    switch (errorControl?.[errorKey].requiredPattern) {
      case this.numeroPattern:
        errorMessage = 'El campo debe ser un número positivo sin comas ni puntos';
        break;
      case this.decimalPattern:
        errorMessage = 'El campo debe ser un número positivo';
        break;
      case this.correoPattern:
        errorMessage = 'El campo debe ser un correo electrónico';
        break;
      default:
        errorMessage = '';
        break;
    }

    return errorMessage;
  }

  camposIguales(campo1: string, campo2: string) {
    
    return (formGroup: AbstractControl): ValidationErrors | null => {

      const pass1 = formGroup.get(campo1)?.value;
      const pass2 = formGroup.get(campo2)?.value;

      if (pass1 !== pass2) {
        formGroup.get(campo2)?.setErrors({ noIguales: true })
        return { noIguales: true };
      }

      formGroup.get(campo2)?.setErrors(null)

      return null;
    }
  }

}
