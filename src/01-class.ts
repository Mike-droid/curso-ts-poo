export class MyDate {
  //! aquí sí es obligatorio escribir el modificador de acceso
  constructor(
    private _year: number = 1998, //* valor por defecto
    private _month: number = 1,
    private _day: number = 1
  ) {}

  printFormat(): string {
    const day = this.addPadding(this._day);
    const month = this.addPadding(this._month);
    return `${day}-${month}-${this._year}`;
  }

  private addPadding(value: number): string {
    return value < 10 ? `0${value}` : value.toString();
  }

  add(amount: number, type: 'days' | 'months' | 'years') {
    switch (type) {
      case 'days':
        this._day += amount;
        break;
      case 'months':
        this._month += amount;
        break;
      case 'years':
        this._year += amount;
        break;
    }
  }

  get day(): number {
    return this._day;
  }

  get month(): number {
    return this._month;
  }

  get isLeapYear(): boolean {
    if (this._year % 400 === 0) return true
    if (this._year % 100 === 0) return false

    return this._year % 4 === 0;
  }

  set month(newMonth: number) {
    if (newMonth < 1 || newMonth > 12) {
      throw new Error('Invalid month');
    }
    this._month = newMonth;
  }
}

