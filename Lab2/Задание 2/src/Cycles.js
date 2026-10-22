/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
  if (start > end) {
    const temp = start;
    start = end;
    end = temp;
  }
  
  let sum = 0;

  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }

  return sum;
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
  let count = 0;

  while (a > 0.1) {
    a = a / 2; 
    count++;   
  }

  return count;
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
  if (message.length < 3) return message;

  let new_message = "";
  let i = 0; 

  do {
    if (i % 3 !== 2){
      new_message += message[i];
    }
    else{
      new_message += '_';
    }
    i += 1;

  } while (i < message.length);

  return new_message; 
}
