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

## Subir a GitHub

Desde la raiz del proyecto:

```bash
git add .
git commit -m "Implement i18n with Ionic Angular Standalone"
git branch -M main
git remote add origin URL_DE_TU_REPOSITORIO
git push -u origin main
```
