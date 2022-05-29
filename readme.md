# Curso de TypeScript: Programación Orientada a Objetos y Asincronismo

## Fundamentos de POO

### Class

A partir de la ES6 podemos usar POO en JS.

Antes, se usaba `function` pero ya podemos usar `class`.

### Métodos

Podemos crear métodos o funciones dentro de una clase sin necesidad de usar `function`.

### Acceso público

Por defecto los atributos y métodos en TS son públicos, aunque podemos mostrarlo explícitamente usando `public`.

### Acceso privado

Usamos `private`.

### Constructor

Podemos acortar el constructor de esta forma:

```typescript
export class MyDate {
  //! aquí sí es obligatorio escribir el modificador de acceso
  constructor(
    public year: number = 1998, //* valor por defecto
    public month: number = 1,
    public day: number = 1
  ) {}
}
```

### Getters

Los getters NO pueden ser void.

```typescript
export class MyDate {
  constructor(
    private _year: number = 1998,
    private _month: number = 1,
    private _day: number = 1
  ) {}

  get day(): number {
    return this._day;
  }

  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true
    if (this._year % 100 === 0) return false

    return this._year % 4 === 0;
  }
}

const myDate = new MyDate(2024, 1, 1);
console.log(myDate.day)
console.log(myDate.isLeapYear) //* parece una propiedad pero es un método


```

### Setters

Los setters DEBEN ser void.

```typescript
set month(newMonth: number) {
  if (newMonth < 1 || newMonth > 12) {
    throw new Error('Invalid month');
  }
  this._month = newMonth;
}
```

## POO Avanzada

### Herencia

Aplicamos la herencia con la keyword `extends`.

```typescript
export class Animal {
  constructor(public name: string) {}
}

export class Dog extends Animal {

  constructor(
    dogName: string,
    public owner: string
  ) {
    super(dogName)
  }
}

```

### Acceso protegido

`protected` es un modificador de acceso que permite que los atributos y métodos de la clase sean accesibles desde la misma clase y desde las clases que heredan de esta.

### Static

Las propiedades y los métodos estáticos pueden ser accedidos sin instanciar a la clase.

Basta con usar la palabra `static` en la declaración de la propiedad o método.

### Interfaces

Podemos usar las interfaces como 'contratos' para que las clases cumplan una serie de requisitos.

```typescript
export interface Driver {
  database: string;
  password: string;
  port: number;

  connect(): void;

  isConnected(name: string): boolean;
}

class PostgresDriver implements Driver {
  constructor(public database: string, public password: string, public port: number) {}

  connect(): void {
    console.log('Postgres connected');
  }

  isConnected(name: string): boolean {
    return true;
  }
}

//! Obligatoriamente deben tener los atributos del driver

class OracleDriver implements Driver {
  constructor(public database: string, public password: string, public port: number) {}

  connect(): void {
    console.log('Oracle connected');
  }

  isConnected(name: string): boolean {
    return true;
  }
}

```

### Clases abstractas

Las clases abstractas son tan 'genericas' que no tiene sentido que sean instanciadas. Usamos la keyword `abstract`.

`export abstract class Animal`

### Singleton: constructor privado

Singleton nos previene crear múltiples instancias de una clase.

Esto es muy usado en Arquitectura de Software, pues nos ayuda a ahorrar uso de memoria.

```typescript
export class MyService {
  static instance: MyService | null = null;

  private constructor(
    private name: string
  ) {}

  get Name() {
    return this.name;
  }

  static create(name: string) {
    if (MyService.instance === null) {
      console.log('Creating new instance');
      MyService.instance = new MyService(name);
    }
    return MyService.instance;
  }
}

const myService1 = MyService.create('MyService1');
console.log(myService1.Name)

const myService2 = MyService.create('MyService2');
console.log(myService2.Name)

const myService3 = MyService.create('MyService3');
console.log(myService3.Name)

console.log(myService1 === myService2); //* true
console.log(myService1 === myService3); //* true

```

## Asincronismo y consumo de APIs

### Promesas

Usaremos [axios](axios-http.com) y lo instalamos con `npm i axios`

```typescript
import axios from "axios"

(async() => {
  async function getProducts() {
    const { data } = await axios.get('https://api.escuelajs.co/api/v1/products')
    return data
  }

  const products = await getProducts()
  console.log(products)
})()

```

### Tipando respuestas HTTP

Para ayudarnos del tipado de lo que esperamos de las respuestas, podemos usar [quicktype](quicktype.io)

También existe una extensión de VS code llamada 'Paste JSON as Code'.

```typescript
import axios from "axios"

import { Product } from "./models/product.model"

(async() => {
  async function getProducts() {
    const { data } = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products')
    return data
  }

  const products = await getProducts()
  console.log(products.map(item => `${item.id} - ${item.title}`))
})()

```

### Proyecto: migración de funciones a clases

### Consumiendo ProductMemoryService

### ProductHttpService

### Consumiendo ProductHttpService

## Genéricos

### Generics

Podemos enviar tipado como parámetro:

```typescript
import { Dog } from "./8-herencia";

function getValue<T>(value: T) { //*Usar T es una convención para tus propios tipados
  return value;
}

getValue<number>(12).toFixed()
getValue<string>('12').length
getValue<boolean>(true).toString()

const doggy = new Dog('doggy', 'Snoop dog')
getValue<Dog>(doggy)

```

### Generics en clases

```typescript
import axios from "axios";

import { Category } from "./models/category.model";
import { Product } from "./models/product.model";

export class BaseHttpService<TypeClass> {
  constructor(
    private url: string,
  ) { }

  async getAll() {
    const { data } = await axios.get<TypeClass[]>(this.url)
    return data;
  }
}

(async()=> {
  const url1 = 'https://api.escuelajs.co/api/v1/products'

  const productService = new BaseHttpService<Product>(url1)
  const rta = await productService.getAll()
  console.log('products: ', rta.length)

  const url2 = 'https://api.escuelajs.co/api/v1/categories'
  const categoryService = new BaseHttpService<Category>(url2)
  const rta2 = await categoryService.getAll()
  console.log('categories: ', rta2.length)
})()

```

### Generics en métodos

### Decoradores

Usaremos [class-validator](https://github.com/typestack/class-validator)

Lo instalamos con `npm install class-validator --save`

En class-validator, las funciones inician con minúsculas y los decoradores con MAYÚSCULAS.
