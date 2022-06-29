import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  miFormulario: FormGroup = this._fB.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this._fB.array([
      ['Metal Gear', Validators.required],
      ['Resident Evil', Validators.required]
    ], Validators.required)
  })

  nuevoCampoFavorito: FormControl = this._fB.control('', Validators.required)

  get favoritosArr() {
    return this.miFormulario.get('favoritos') as FormArray
  }

  constructor(private _fB: FormBuilder) { }

  campoEsValido(campo: string) {
    return this.miFormulario.controls[campo].errors
      && this.miFormulario.controls[campo].touched
  }

  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return
    }
    console.log(this.miFormulario.value);
  }

  agregarFavorito() {
    if (this.nuevoCampoFavorito.invalid) {
      return;
    }
    // FormControl
    //this.favoritosArr.push(new FormControl(this.nuevoCampoFavorito.value, Validators.required))
    // form builder
    this.favoritosArr.push(this._fB.control(this.nuevoCampoFavorito.value, Validators.required))

    this.nuevoCampoFavorito.reset()
  }

  eliminarControl(indice: number){
    this.favoritosArr.removeAt(indice);
  }

}
