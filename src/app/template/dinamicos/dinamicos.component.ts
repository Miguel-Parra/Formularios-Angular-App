import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';



interface Persona {
  nombre: string;
  favoritos: Favorito[];
}

interface Favorito {
  id: number;
  nombre: string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  persona: Persona = {
    nombre: "Miguel",
    favoritos: [
      { id: 1, nombre: 'Metal Gear' },
      { id: 2, nombre: 'Resident Evil' }
    ]
  }

  nuevoJuego: string = "";
  @ViewChild('miFormulario') miFormulario!: NgForm;

  validarCampoNombre() {
    return (this.miFormulario?.controls['nombre']?.errors &&
      this.miFormulario?.controls['nombre']?.touched)
  }
  guardar() {
    console.log("Formulario posteado");
  }

  agregarJuego(){
    if(this.nuevoJuego.trim() !== ''){
      const nuevoFavorito: Favorito  ={
        id: this.persona.favoritos.length + 1,
        nombre: this.nuevoJuego.trim()
      }
      this.persona.favoritos.push({...nuevoFavorito});
      this.nuevoJuego = "";
    }
  }

  eliminar(index: number) {
    this.persona.favoritos.splice(index,1);
  }

}
