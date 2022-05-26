export class MyMath {
  static readonly PI: number = 3.1416

  static max(...numbers: number[]) {
    return numbers.reduce((max, item) => (max > item ? max : item))
  }
}

console.log(MyMath.PI)
console.log(MyMath.max(-10, -20, -30, -40, -50))
