import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit{
  
  // miFormulario: FormGroup = new FormGroup({
  //   nombre: new FormControl('RTX 4080Ti'),
  //   precio: new FormControl(1500),
  //   existencias: new FormControl(5),
  // })

  miFormulario: FormGroup = this._fB.group({
    nombre: [null, [Validators.required, Validators.minLength(3)] ],
    precio: [null, [ Validators.required, Validators.min(0)]],
    existencias: [null, [ Validators.required, Validators.min(0)]],
  })

  constructor(private _fB: FormBuilder) { }

  ngOnInit(): void {
   this.miFormulario.reset({
    nombre: 'RTX 4080ti',
    precio: 1600,
    existencias: 10
   })
  }

  campoEsValido(campo: string){
    return this.miFormulario.controls[campo].errors 
    && this.miFormulario.controls[campo].touched
  }

  guardar(){
    if(this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value)
    this.miFormulario.reset();
    
  }


}
