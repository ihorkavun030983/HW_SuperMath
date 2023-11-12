class SuperMath {
  check(obj) {
    const { X, Y, znak } = obj;
    const input = prompt(`Ви точно хочете виконати дію ${znak} з ${X} та ${Y}? Введіть 'так' або 'ні'.`);
    if (input === 'так') {
      let result;
      switch (znak) {
        case '+':
          result = X + Y;
          break;
        case '-':
          result = X - Y;
          break;
        case '*':
          result = X * Y;
          break;
        case '/':
          result = X / Y;
          break;
        case '%':
          result = X % Y;
          break;
        default:
          alert('Параметр "Знак дії" некоректний');
      }
      return result;
      } else if (input === 'ні') {

      const newUserX = prompt('Введіть інше число X:');
      const newUserY = prompt('Введіть інше число Y:');
      const newUserZnak = prompt('Введіть оператор (+, -, *, /, %):');
      const newUserObj = { X: +(newUserX), Y: +(newUserY), znak: newUserZnak };
      return this.check(newUserObj);
      }
    } 
  }
  
const obj = {X:12, Y: 3, znak: '/'}
const superMath = new SuperMath()
const result = superMath.check(obj)
console.log(result)



