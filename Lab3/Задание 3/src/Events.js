/*
   1. Создайте функцию createButton(). Необходимо, чтобы эта функция осуществила вставку в body тег button с текстом: "Удали меня".
      При клике по button удалить этот button.
*/
export function createButton() {
  const button = document.createElement('button');
  button.textContent = 'Удали меня';
  button.addEventListener('click', function () {
    button.remove();
  });
  document.body.appendChild(button);
}

/*
   2. Создайте функцию createArrList(arr), в которую передается 1 параметр: arr - массив строк.
      Функция выводит этот массив в виде маркированного списка внутри тега body.
      При наведении курсора мыши на элемент списка у этого элемента создается атрибут title, в котором записан его текст.
*/
export function createArrList(arr) {
  const ul = document.createElement('ul');
  
  for (let i = 0; i < arr.length; i++) {
    const li = document.createElement('li');
    li.textContent = arr[i];
    li.title = arr[i];
    ul.appendChild(li);
  }
  
  document.body.appendChild(ul);
}
/*
   3. Создайте функцию createLink(), которая сгенерирует следующую разметку и вставит ее в body:

      <a href="https://tensor.ru/">tensor</a>

      При первом клике по ссылке в конец ее текста через пробел дописывается ее href.
      При следующем клике происходит действие по умолчанию (переход по ссылке в текущей вкладке).
*/
export function createLink() {
  const link = document.createElement('a');
  link.href = 'https://tensor.ru/';
  link.textContent = 'tensor';
  let clicks = 0;

  link.addEventListener('click', function (event) {
    if (clicks === 0) {
      event.preventDefault();
      link.textContent = link.textContent + ' ' + link.href;
      clicks++;
    }
  });
  document.body.appendChild(link);
}

/*
   4. Создайте функцию createList(), которая сгенерирует следующую разметку и вставит ее в body:

      <ul>
         <li>Пункт</li>
      </ul>
      <button>Добавить пункт</button>

      При клике по элементу li ему в конец текста добавляется восклицательный знак.
      При клике по button в конец списка добавляется новый элемент li с текстом: "Пункт".
      Клик по новому li также добавляет восклицательный знак в конец текста.
*/
export function createList() {
  const list = document.createElement('ul');
  
  const firstItem = document.createElement('li');
  firstItem.textContent = 'Пункт';
  
  firstItem.addEventListener('click', function () {
    firstItem.textContent = firstItem.textContent + '!';
  });
  
  list.appendChild(firstItem);
  
  const addButton = document.createElement('button');
  addButton.textContent = 'Добавить пункт';
  
  addButton.addEventListener('click', function () {
    const newItem = document.createElement('li');
    newItem.textContent = 'Пункт';
    
    newItem.addEventListener('click', function () {
      newItem.textContent = newItem.textContent + '!';
    });
    
    list.appendChild(newItem);
  });

  // Добавляем на страницу
  document.body.appendChild(list);
  document.body.appendChild(addButton);
}