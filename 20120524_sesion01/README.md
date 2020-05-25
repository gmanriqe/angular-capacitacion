# Angular

> Angular a diferencia de React, es que Angular es un framework.
> Si quieres hacer paginas web sencilla, suficiente con jQuery.
> En la version 5, se dio un cambio grande en Angular por la programación "Reactiva = RXJS". Existe programación reactiva para PHP, .net, etc.

## Comandos

- *Add* (Para agregar) ✅
- *Build* (Para compilar para diferentes ambientes) ✅
Angular llega con 2 ambientes por defecto: Desarrollo y producción
- Analytics (Para los desarrolles de angular)
- Update (Permite actualizar la version de angular y tambien algunos componentes)
- *Test* (Pruebas unitarias y pruebas de integración). Por defecto utiliza Jasmin ✅
- Deploy (Desplegar el App).
- Doc (Seguir la documentación).
- e2e (end to end) Por defecto utiliza Protactor. Yuquinver es mucho mejor para pruebas.
- Version (comando utilitario)
- Help
- *New* (Comando para crear la estructura) ✅
- *Generate* (Crear elemento de angular. Ejm: Component, Servicios, Interfaces, Directivas, Pipe, Interceptores) ✅
- *Lint* (Comando para asegurar la calidad del código) ✅
- Run (Comando para correr Angular. Poco utilizado)
- *Serve* (Comando para correr el proyecto) ✅
- x18n (Comando para crear una aplicación de angular en diferentes idiomas.Debemos tener variables en diferentes idiomas).

## Requisitos

- Node (Recomienda a partir de la version 11). LTS es una version "estable"
- Git (Ejemplo: Exportar PDF o EXCEL, desde el frontend, tambien es posible desde el backend.)
- Angular CLI
**VISUAL CODE**

## 20120524_sesion01

- browserlist: Angular no tiene soporte para Internet Explorer 9 - 11.
- Prettier (plugins de VSC)
- Si por alguna razon debes hacer una configuración en angular.json, en ese caso debes para el servidor y reiniciarlo.
- Si quisiera cambiar el prefijo de los componentes debo cambiarlo en Angular.js y tslint.json (prefix).
- *COMUNICACIÓN UNIDIRECCIONAL* | 20% | TypeScript ➡️ HTML
- *COMUNICACIÓN BIDIRECCIONAL* | HTML ➡️ TypeScript
- Una *DIRECTIVA ESTRUCTURAL* lo podemos diferenciar, ya que le antepone un *. Ejm: *ngFor
- Podriamos decir que un evento, es algo que sale del componente
- *[]* tiene un significado: A sido evaluado previamente con JavaScript - siempre aplica a entradas.
- Tarea: Creación de un componente: Registro: Nombres, Apellidos, Correo, Contrasenia

### Comandos

1. Creacion de componente (Crea los archivos: .css, .html, .spec.ts, .ts)

```sh
$ng generator component nombreComponente
```

- Resumen

```sh
$ng g c nombreComponente
```

## Extra

- ./ ➡️ Hace referencia apartir de la ruta desde el mismo archivo.
- Podemos hacer el deploy de Angular hasta en un servidor misio, ya que el transpilado es HTML, CSS y JS.
- Node con Gulp y en Angular con Webpack.
- Todo lo que desarrollamos debe cumplir con el CLEANCODE
