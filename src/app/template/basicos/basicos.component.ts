import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;
  initForm = {
    productoF: 'RTX 4080t',
    precioF: 10,
    existeciaF: 0
  }

  constructor() { }

  ngOnInit(): void {
  }

  nombreValido(): boolean {
    return this.miFormulario?.controls["productoF"]?.invalid &&
      this.miFormulario?.controls['productoF']?.touched
  }

  precioValido(): boolean {
    return this.miFormulario?.controls["precioF"]?.touched &&
      this.miFormulario?.value["precioF"] < 0
  }

  guardar() {
    this.miFormulario.resetForm({ productoF:"algo", existeciaF: 0, precioF: 0 });
  }
}
