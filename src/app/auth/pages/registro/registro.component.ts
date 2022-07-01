import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidatorService } from 'src/app/shared/validator/email-validator.service';
import { ValidatorService } from 'src/app/shared/validator/validator.service';
// import { emailPattern, nombreApellidoPattern, noPuedeSerEsteNickName } from 'src/app/shared/validator/validaciones';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: []
})
export class RegistroComponent implements OnInit {

  get emailErrorMsg(): string {
    console.log("hola");

    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return "El email es requerido";
    } else if (errors?.['pattern']) {
      return "Formato invalido. Ejemplo: test1@test.com";
    } else if (errors?.['emailExistente']) {
      return "El email ingresado ya existe";
    }
    return "";
  }

  miFormulario: FormGroup = this._fBuilder.group({
    nombre: ['', [Validators.required, Validators.pattern(this._validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this._validatorService.emailPattern)], [this._emailValidator]],
    username: ['', [Validators.required, this._validatorService.noPuedeSerEsteNickName]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    password2: ['', [Validators.required]]
  }, {
    validators: [this._validatorService.camposIguales('password', 'password2')]
  })

  constructor(
    private _fBuilder: FormBuilder,
    private _validatorService: ValidatorService,
    private _emailValidator: EmailValidatorService
  ) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: "Miguel Parra",
      email: "test1@test.com",
      username: "mikets644",
      password: '123456',
      password2: '123456'
    })
  }

  validarCampo(campo: string) {
    return this.miFormulario.get(campo)?.invalid &&
      this.miFormulario.controls[campo]?.touched
  }

  emailRequired() {
    return this.miFormulario.get('email')?.errors?.['required'] &&
      this.miFormulario.controls['email']?.touched
  }

  emailPattern() {
    return this.miFormulario.get('email')?.errors?.['pattern'] &&
      this.miFormulario.controls['email']?.touched
  }

  emailExiste() {
    return this.miFormulario.get('email')?.errors?.['emailExistente']
  }

  submitFormulario() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
  }

}
