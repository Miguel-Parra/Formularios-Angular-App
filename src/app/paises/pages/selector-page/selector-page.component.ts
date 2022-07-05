import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { switchMap, tap } from 'rxjs';
import { PaisLarge, PaisSmall } from '../../interfaces/paises.interface';
import { ServicesService } from '../../services/services.service';

@Component({
  selector: 'app-selector-page',
  templateUrl: './selector-page.component.html',
  styleUrls: []
})
export class SelectorPageComponent implements OnInit {

  miFormulario: FormGroup = this._fBuilder.group({
    'region': ['', Validators.required],
    'pais': ['', Validators.required],
    'frontera': ['', Validators.required]
  })

  //llenar selectores
  regiones: string[] = [];
  paises: PaisSmall[] = [];
  // fronteras: string[] = [];
  fronteras: PaisSmall[] = [];

  //UI
  cargando: boolean = false;

  constructor(
    private _fBuilder: FormBuilder,
    private _paisesService: ServicesService,
  ) { }

  ngOnInit(): void {
    this.regiones = this._paisesService.regiones;
    //cuando cambie la región
    this.miFormulario.get('region')?.valueChanges
      .pipe(
        tap(() => {
          this.cargando = true;
          this.miFormulario.get('pais')?.reset('')}
          ),
        switchMap(valorRegion => this._paisesService.getPaisesPorRegion(valorRegion))
      )
      .subscribe(paisesC => {
        this.cargando = false;
        this.paises = paisesC;
      })

    //cuando cambia el pais
    this.miFormulario.get('pais')?.valueChanges
      .pipe(
        tap(() => {
          this.cargando = true;
          this.miFormulario.get('frontera')?.reset('')
        }),
        switchMap(codigoPais => this._paisesService.getPaisPorCodigo(codigoPais)),
        switchMap(pais => {
          const paisObt = pais === null ? [] : pais[0]?.borders;
          return this._paisesService.getPaisesPorCodigos(paisObt)})
      )
      .subscribe(paises => {
        this.cargando = false;
        this.fronteras = paises;
        console.log(paises);
        
        // this.fronteras = (pais === null ? [] : pais[0]?.borders);
      })
  }

  guardar() {
    console.log(this.miFormulario.value);
  }
}
