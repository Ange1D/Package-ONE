# Package-ONE

Descripción
=========

Es una pequeña biblioteca para cifrar y descifrar texto basado en el [desafío del programa Oracle Next Education](https://ange1d.github.io/Challenge-ONE-Alura/) 
- Funciona solo con letras minúsculas
- No se deben utilizar letras con acentos ni caracteres especiales
-  Las "llaves" que se utilizan son las siguientes:
   - La letra "e" es convertida para "enter"
   - La letra "i" es convertida para "imes"
   - La letra "a" es convertida para "ai"
   - La letra "o" es convertida para "ober"
   - La letra "u" es convertida para "ufat"

## Instalación
```
npm i @ange1d/package-one
```

## uso:
```js
const cifrador = require("@ange1d/package-one");

cifrador.cifrar("gato");

```
Output `gaitober`

```js
cifrador.descifrar("gaitober");

```
Output `gato`

```js
cifrador.descifrar("GATO");

```
Output `Message contains unsupported characters`
