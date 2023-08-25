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
    return Number((a + b).toFixed(10))
  }
  subtraction(a: number, b: number) {
    return Number((a - b).toFixed(10))
  }
  division(a: number, b: number) {
    return Number((a / b).toFixed(10))
  }
  multiplication(a: number, b: number) {
    return Number((a * b).toFixed(10))
  }
  sqr(a: number) {
    return Number((a * a).toFixed(10))
  }
  sqrt(a: number) {
    return Number(Math.sqrt(a).toFixed(10))
  }
  oneDivToNumber(a: number) {
    return Number((1/a).toFixed(10))
  }
  changeSign(a: number) {
    if (a === 0) return a
    return Number((-1 * a).toFixed(10))
  }
  percent(a: number, percent: number) {
    return Number((a*percent/100).toFixed(10))
  }

  doMath(sign: string, first: string, second: string) {
    switch (sign) {
      case '+':
        first = String(this.addition(Number(first),Number(second)).toFixed(10))
        break;
      case '-':
        first = String(this.subtraction(Number(first),Number(second)).toFixed(10))
        break;
      case '*':
        first = String(this.multiplication(Number(first),Number(second)).toFixed(10))
        break;
      case '/':
        first = String(this.division(Number(first),Number(second)).toFixed(10))
        break;
    }
    return first
  }
}

export const math = new MyMath();