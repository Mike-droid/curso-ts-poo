import { MyDate } from "./01-class";

const myDate = new MyDate(2022, 10, 22);
console.log(myDate.printFormat())
myDate.add(9, 'days')
console.log(myDate.printFormat())
