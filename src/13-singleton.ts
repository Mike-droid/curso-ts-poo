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
