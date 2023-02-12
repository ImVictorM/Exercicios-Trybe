
import months from "./months"
class CustomDate {
  private _months: Array<[string, number]>;
  private _fullDate: string;
  constructor(
    private _day: number,
    private _month: number,
    private _year: number,
  ) {
    this._fullDate = `${this._year}-${this._month}-${this._day}`;
    this.checkDate();
    this._months = months;
  }

  get day() { return this._day };
  get month() { return this._month };
  get year() { return this._year };

  private checkDate(): null | Error {
    const now = new Date();
    const dayIsValid = this._day > 0 && this._day <= 31;
    const monthIsValid = this._month <= 12 && this.month > 0;
    const yearIsValid = now.getFullYear() >= this._year && this._year > 0;
    const fullDateValid = now > new Date(this._fullDate);
    if (dayIsValid && monthIsValid && yearIsValid && fullDateValid) {
      return null;
    };
    throw new Error('Invalid Date');
  };

  public getMonthName(): string {
    const filterResponse = this._months.find((month) => month[1] === this._month);
    if (filterResponse) {
      const monthName = filterResponse[0];
      return monthName;
    }
    throw new Error('Invalid month');
  };

  public isLeapYear(): boolean {
    return ((this._year % 4 === 0) && (this._year % 100 !== 0)) || (this._year % 400 === 0);
  };

  public compare(newDate: Date): 1 | -1 | 0 {
    const newDateFormatted = `${newDate.getUTCFullYear()}-${newDate.getUTCMonth() + 1 }-${newDate.getUTCDate()}`;

    if (this._fullDate === newDateFormatted) {
      return 0;
    }
    if (newDate > new Date(this._fullDate)) {
      return 1;
    };
    return -1
  };
}

const date = new CustomDate(12, 2, 2020);
console.log(date.getMonthName());
console.log(date.isLeapYear());
console.log(date.compare(new Date('2022-04-04')));
console.log(date.compare(new Date('2020-02-12')));
console.log(date.compare(new Date('2018-04-04')));
