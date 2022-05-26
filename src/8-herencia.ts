export abstract class Animal {
  constructor(protected name: string) {}

  move() {
    console.log('moving along!')
  }

  greeting() {
    return `Hello, my name is ${this.name}`
  }

  protected doSomething() {
    console.log('do!')
  }
}

export class Dog extends Animal {

  constructor(
    dogName: string,
    public owner: string
  ) {
    super(dogName)
  }

  bark(times: number): void {
    for (let i = 0; i < times; i++) {
      console.log('Woof!')
    }
    this.doSomething()
  }

  dogMove() {
    console.log('moving as a dog')
    super.move()
  }
}

/* const fifi = new Animal('Fifi')
fifi.move()
console.log(fifi.greeting()) */

const zeus = new Dog('Zeus', 'Miguel')
zeus.move()
console.log(zeus.greeting())
zeus.bark(3)
console.log(zeus.owner)
