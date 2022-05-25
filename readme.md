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
