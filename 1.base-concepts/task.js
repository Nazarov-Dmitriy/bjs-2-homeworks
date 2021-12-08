'use strict';

function solveEquation(a, b, c) {
  let arr = [],
    D, x, x1, x2;
  D = b ** 2 - 4 * a * c;
  if (D < 0) {
    arr = [];
  } else if (D === 0) {
    x = -b / (2 * a);
    arr.push(x);
  } else {
    x1 = (-b + Math.sqrt(D)) / (2 * a);
    x2 = (-b - Math.sqrt(D)) / (2 * a);
    arr.push(x1);
    arr.push(x2);
  }
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
  let amountCredit = amount - contribution;
  let curentDate = new Date();
  let countMonth = 0;
  let P = 0;

  if (isNaN(percent) === true) {
    return (`Параметр "Процентная ставка" содержит неправильное значение "${percent}"`);
  }

  if (isNaN(contribution) === true) {
    return (`Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`);
  }

  if (isNaN(amount) === true) {
    return (`Параметр "Общая стоимость" содержит неправильное значение "${amount}"`);
  }

  percent = +percent;
  contribution = +contribution;
  amount = +amount;
  P = (1 / 12) * percent /100;

  countMonth = Math.abs((curentDate.getMonth() + 1) - (date.getMonth() + 1) +
    (12 * (curentDate.getFullYear() - date.getFullYear())));


  totalAmount = +(amountCredit * (P + (P / (((1 + P) ** countMonth) - 1)))*countMonth).toFixed(2);


    return totalAmount;
  }