import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-switches',
  templateUrl: './switches.component.html',
  styles: [
  ]
})
export class SwitchesComponent implements OnInit {

  miFormulario: FormGroup = this._fB.group({
    genero: ['M', Validators.required],
    notificaciones: [false, Validators.required],
    terminos: [false, Validators.requiredTrue]
  })

  persona = {
    genero: 'F',
    notificaciones: true
  }

  constructor(private _fB: FormBuilder) { }

  ngOnInit(): void {
    this.miFormulario.reset({ ...this.persona, terminos: false })
    this.miFormulario.valueChanges.subscribe(({terminos, ...restoControles}) => {
      this.persona = restoControles;
    })
  }

  guardar() {
    let valoresForm = { ...this.miFormulario.value }
    delete valoresForm.terminos
    this.persona = valoresForm
  }
}
