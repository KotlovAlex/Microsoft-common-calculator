interface IMath {
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
  addition(a: number, b: number) {
    return a + b
  }
  subtraction(a: number, b: number) {
    return a - b
  }
  division(a: number, b: number) {
    return a / b
  }
  multiplication(a: number, b: number) {
    return a * b
  }
  sqr(a: number) {
    return a * a
  }
  sqrt(a: number) {
    return Math.sqrt(a)
  }
  oneDivToNumber(a: number) {
    return 1/a
  }
  changeSign(a: number) {
    if (a === 0) return a
    return -1 * a
  }
  percent(a: number, percent: number) {
    return a*percent/100
  }
}

export const math = new MyMath();