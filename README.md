# FormulariosApp - Angular

El proyecto fue elaborado con [Angular CLI](https://github.com/angular/angular-cli) versión 13.3.3.
## **Descripción**

En esta aplicación se implementó:
- Formularios por template o Template-Driven Forms
- Formularios Reactivos o Model-Driven Forms.
- Tantos los formularios por Template como los Reactivos presentan campos básicos, dinámicos y switches.
- Validaciones propias de Angular y validaciones peronalizadas, incluyendo validaciones asíncronas.
- Selects anidados
- Peticiones al API de RESTCOUNTRIES para obtener información acerca de los países en el uso de los select anidados.
- Uso de operadores de RxJS(switchMap, map y tap), de Observables (of) y métodos de RxJS (combineLatest)
- Diseño responsive básico mediante el uso del sistema Grid de Bootstrap.



## **Temas** ##

A continuación, se presenta los temas aplicados en la elaboración de esta aplicación:

<br>

**Formularios por Template**

- Template driven
- ViewChild
- Two way databinding
- Formularios dinámicos
- Checks, radios y switches
- Directivas personalizadas.
- Manejo del formulario y validaciones
- Encapsular módulos y scope de los mismos

**Formularios Reactivos**

-	Formularios Reactivos
-	Lazyload y tareas relacionadas
-	Validaciones propias de Angular
-	Arreglos y objetos anidados
-	FormBuilder
-	FormGroup
-	FormArray

**Validaciones manuales y asíncronas**

- Validaciones manuales
- Validaciones asíncronas
- Validar contra expresiones regulares
- Separar la lógica de validaciones
- Estado del formulario
- Mensajes de error personalizados

**Múltiples selectores anidados**
- Propiedad valueChanges de los Controls
- operadores de RxJS(switchMap, map y tap)
- Observables (of)
- Métodos de RxJS (combineLatest)

**Tecnologías utilizadas:**

- Angular
- Bootstrap
- JSON Server (backend)
- RESTful API RESTCOUNTRIES


<br>

## **JSON SERVER** 
https://www.npmjs.com/package/json-server

Es un paquete de node que permite tener rápidamente un backend para crear prototipos, provee una API REST falsa completa sin codificar nada. 

Para instalarlo debe utilizar el comando

```
npm install -g json-server
```

Se hizo uso en la sección "Validaciones" especificamente para validar que el coreo ingresado por el usuario no se encuentre registrado en la base de datos `db.json`. Esta base de datos fue colocada en la carpeta **assets**

Levantar el JSON Server con el comando `json-server --watch db.json`

<br>

## **RESTCOUNTRIES** ##
https://restcountries.com/#api-endpoints-v3-region

Provee información sobre países a través de su API RESTful.

Fue utilizada en la sección Paises para demostrar el funcionamiento de los Selects anidados, en los que la información cambia de acuerdo a la selección realizada por el usuario.

<br>

## **Recomendaciones**

<br>

- Recuerden reconstruir los módulos de Node con `npm install`

- Para correr el servidor de desarrollo ejecute `ng serve -o`. La aplicación se recargará automáticamente si cambia cualquiera de los archivos de origen.

- Para correr el backend de prueba dirijase al directorio donde se encuentra el archivo `db.json` y ejecute el comando `json-server --watch db.json`

- Si desea compilar el proyecto ejecute `ng build`.

