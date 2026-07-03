# Ionic i18n Lab

Proyecto de laboratorio para implementar internacionalizacion dinamica en una aplicacion movil con Ionic, Angular Standalone y ngx-translate.

## Tecnologias utilizadas

- Ionic v8
- Angular Standalone Components
- @ngx-translate/core
- @ngx-translate/http-loader
- TypeScript
- JSON

## Instalacion

```bash
npm install
```

## Ejecucion

```bash
ionic serve
```

En Windows PowerShell, si `ionic serve` queda bloqueado por la politica de ejecucion de scripts, se puede usar:

```bash
ionic.cmd serve
```

## Estructura de traducciones

Los archivos de idioma se encuentran en:

```text
src/assets/i18n/es.json
src/assets/i18n/en.json
```

## Funcionalidad

La aplicacion permite cambiar dinamicamente entre espanol e ingles usando un `ion-select`, sin recargar la pagina.

El idioma seleccionado se guarda en `localStorage` y tambien actualiza el atributo `lang` del documento.

## Repositorio

Este proyecto se encuentra disponible en GitHub como entregable de la práctica de laboratorio.

## Validaciones técnicas

- Uso de Angular Standalone Components.
- Uso de @ngx-translate/core.
- Carga de traducciones desde archivos JSON.
- Cambio dinámico de idioma con ion-select.
- Uso de @for y @if.
- Sin uso de IonicModule.
- Sin uso de *ngIf ni *ngFor.
```
