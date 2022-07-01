import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AbstractControl, AsyncValidator, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { map} from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class EmailValidatorService implements AsyncValidator {


  constructor(private _httpClient: HttpClient) { }
  
  validate(control: AbstractControl): Promise<ValidationErrors | null> | Observable<ValidationErrors | null> {
    const email = `${control.value}`
    return this._httpClient.get<any[]>(`http://localhost:3000/usuarios?q=${email}`)
    .pipe(
      map(respuesta => {
        if(respuesta.length != 0){
          return {
            emailExistente: true
          }
        }
        return null;
      })
    );
  }


}
