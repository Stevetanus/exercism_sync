//
// This is only a SKELETON file for the 'Clock' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Clock {
  hour;
  minute = 0;
  constructor(hour, minute = 0) {
    this.updateHourMinute(hour, minute);
  }

  toString() {
    return `${Math.floor(this.hour / 10)}${Math.floor(this.hour % 10)}:${Math.floor(this.minute / 10)}${Math.floor(this.minute % 10)}`
  }

  plus(minute) {
    this.updateHourMinute(this.hour, minute);
    return this;
  }

  minus(minute) {
    this.updateHourMinute(this.hour, -minute);
    return this;
  }

  equals(anotherClock) {
    return this.toString() === anotherClock.toString();
  }

  updateHourMinute(hour, minute) {
    const minutes = hour * 60 + this.minute + minute;
    const innerHour = Math.floor(minutes / 60)
    const innerMinute = minutes % 60
    this.hour = innerHour >= 0 ? innerHour % 24 : (24 + innerHour % 24) % 24;
    this.minute = innerMinute >= 0 ? innerMinute % 60 : (60 + innerMinute) % 60;
    console.log("this.hour: ", this.hour, "this.minute: ", this.minute);
  }
}
