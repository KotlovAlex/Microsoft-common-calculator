interface IMath {
  numOfSignAfrerPoint(a: string):number;
  addition(a: number, b: number): number;
  subtraction(a: number, b: number): number;
  division(a: number, b: number): number;
  multiplication(a: number, b: number): number;
  sqr(a: Number): number;
  sqrt(a: number): number;
  oneDivToNumber(a: number): number;
  changeSign(a: number): number;
  percent(a: number, percent: number): number;
}

class MyMath implements IMath {
  numOfSignAfrerPoint(a: string) {
    return ~(a + '').indexOf('.') ? (a + '').split('.')[1].length : 0;
  }
  fixedValue(a: number) {
    return Number(a.toFixed(Math.min(this.numOfSignAfrerPoint(String(a)),10)))
  }
  addition(a: number, b: number) {
    const res = a + b
    return this.fixedValue(res)
  }
  subtraction(a: number, b: number) {
    const res = a - b
    return this.fixedValue(res)
  }
  division(a: number, b: number) {
    const res = a / b
    return this.fixedValue(res)
  }
  multiplication(a: number, b: number) {
    const res = a * b
    return this.fixedValue(res)
  }
  sqr(a: number) {
    const res = a * a
    return this.fixedValue(res)
  }
  sqrt(a: number) {
    const res = Math.sqrt(a)
    return this.fixedValue(res)
  }
  oneDivToNumber(a: number) {
    const res = 1 / a
    return this.fixedValue(res)
  }
  changeSign(a: number) {
    if (a === 0) return a
    return (-1 * a)
  }
  percent(a: number, percent: number) {
    const res = a*percent/100
    return this.fixedValue(res)
  }

  doMath(sign: string, first: string, second: string) {
    switch (sign) {
      case '+':
        first = String(this.addition(Number(first),Number(second)))
        break;
      case '-':
        first = String(this.subtraction(Number(first),Number(second)))
        break;
      case '*':
        first = String(this.multiplication(Number(first),Number(second)))
        break;
      case '/':
        first = String(this.division(Number(first),Number(second)))
        break;
    }
    return first
  }
}

export const math = new MyMath();