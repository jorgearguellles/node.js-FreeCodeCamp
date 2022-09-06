# Node.js

## 1. Introducción a Node.js

- **Qué no es Node.js**
  No es un lenguaje de porgramación
  No es un framework de JS
  No es una librearía de JS
- **Que es Node?**
  Node es un **entorno de ejecución** de JavaScript orientado a **eventos asincronos** de manera local (En la terminal).
- **Qué es un entorno de ejecución**
  Un entorno de ejecución es un entorno o infraestructura en el cual se ejecuta un porgrama o aplicación.
- **Qué es un evento asíncrono**
  Un evento asíncrono es aquella acción o evento que se ejecuta independientemente del proceso principal de la aplicación.
  No interrumpe la ejecución de la aplicación, a diferencia de un evento sincrono.
  ![async event](./assets/imgs/evento-asincrono.png)
- **Qué es un evento sincrono?**
  Es un evento que se ejecuta como parte del proceso principal de la aplicación.
  Si interrumpe la ejecución de la aplicación, adiferenciua de un evento asíncrono.
  ![sync event](./assets/imgs/evento-sincrono.png)

## 2. Conceptos Básicos

- **Arquitectura Cliente-Servidor**
  Módelo en el cual el **servidor** envía recursos al dispotivio que los solicita **(Cliente)**

- **Qué es un Protocolo**
  Un protocolo es un conjunto de reglas que permite que dos o más entidades de una red se comuniquen entre sí.

- **Qué es una Base de Datos?**
  Una base de datos es un conjunto de datos estructurados sobre un mismo contexto que se pueden consultar.

![Modelo Cleinte-Servidor-BaseDeDatos](./assets/imgs/modelo-cliente-servidor.png)

## 3. Aplicaciónes de Node.js

Node es usado para desarrollo Back-End y creación de API's

- **Qué es una API**
  Una API por sus siglas en ingles significa:
- **A**pplicacion
- **P**rogramming
- **I**nterface
  En español una Interfaz de progra,mación de aplicaciónes.
  ![api](./assets/imgs/api.png)

- **Porque usar Node.js**
  Porque nos permite desarollar aplicaciones escalabres y de tiempo real.
- **Qué significa que una aplicación sea Escalable**
  Qué su **rendimiento** se puede adaptar a menida que crece el uso de la aplicación y recibe más solicitudes
- **Qué significa que unaaplicación sea de Tiempo Real**
  Qué establece una relación bidireccional y dínamica entre el servidor y el cliente. Analiza los eventos que occuren y reacciona de forma casi inmediata.

## 4. El REPL de Node.js

- **Qué significa REPL**
  REPL singifica
- Read
- Eval
- Print
- Loop
  En español sería, el Ciclo de Leer, Evaluar y Mostrar
  Para ingresar en el REPL, lo hacemos escribiendo en la terminal el comando `node`.

  ![](./assets/imgs/repl.png)

## 5. Primer programa con Node.js

Para ejecutar con Node.js un archivo de JS localmente lo hacemos desde la termina con la palabra reservada node, de la siguiente forma: `node path/fileName.js`

Por ejemplo, tenemos un archivo llamado app.js con una función que saluda

```js
function saludar(nombre) {
  return `Hello ${nombre}`;
}

console.log(saludar("Jorge"));
```

En la termina escribimos:

```
node src/app.js
```

![](./assets/imgs/node-repl.png)

## 6. Modulos de Node.js

- **Qué es un módulo de node.js**
  Un módulo es una funcionalidad organizada en uno o varios archivos JavaScript que puede ser **reutilizada** en una aplicación.

- **Ventajas de trabajar con módulos**
- Evitamos repetir código
- Reutilizamos el código
- Es más fácil encontrar y corregir bugs
- Es más fácil modificar el código
- Es más fácil agregar nueva funcionalidades

## 7. Módulos principales de Node.js

Los módulos buit-in o módulos core son los módulos principales que viene instalados en Node.js, es decir, se pueden usar directamente al trabaajr con Node.js, sin instalarlos.
Son muy utiles para realizar tareas comunes al trabajar con Node.js.

- http
- https
- fs (file system)
- os (operating system)
- path

### 7.1 El módule console

Console es un módulo buit-in que implemnta la funcionalidad similar a la consola de un navegador web.

- **console.log()**
- **console.warm()**
- **console.error()**
- **console.assert()**
- **console.table()**

### 7.2 El módulo process

- **console.log(process)**

### 7.3 El módulo OS

- **console.log()**
