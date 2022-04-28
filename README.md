# Teste Técnico da Maeztra

Nesse teste irei trazer a resolução de algumas questões técnicas relacionadas a uma vaga de emprego.

Essas questões envolvem ordenação de valores, busca por repetição de valores e arranjo matemático.

Usando `ESLINT` para manter um código limpo e de fácil entedimento.

# Índice
- [Teste Técnico da Maeztra](#teste-técnico-da-maeztra)
- [Índice](#índice)
- [Resolução dos exercícios](#resolução-dos-exercícios)
	- [Questão 1](#questão-1)
	- [Questão 2](#questão-2)
	- [Questão 3](#questão-3)
	- [Questão 4](#questão-4)
	- [Questão 5](#questão-5)

# Resolução dos exercícios
## Questão 1
```javascript
const isSorted = (array) => {
  if (array.every((value, index) => !index || (value >= array[index - 1])) == true || array.every((value, index) => !index || (value <= array[index - 1])) == true) {
    return `Input ${array.toString()} -> Está ordenado`;
  } else {
    return `Input ${array.toString()} -> Não está ordenado`;
  };
};
```
## Questão 2
```javascript
const isRepeated = (array) => {
  return array.filter((item, index) => array.indexOf(item) !== index);
};
```
## Questão 3
```javascript
const matchString = (array) => {
  const map = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const tempArray = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] === '(' || array[i] === '[' || array[i] === '{') {
      tempArray.push(array[i]);
    } else if (tempArray[tempArray.length - 1] === map[array[i]]) {
      tempArray.pop();
    } else return false;
  }
  return tempArray.length ? false : true;
};
```
## Questão 4
```javascript
const popularYear = (array) => {
  const x = [];
  const y = [];
  for (let i = 0; i < array.length; i++) {
    const innerArrayLength = array[i].length;
    for (let j = 0; j < innerArrayLength; j++) {
      if (j == 0) {
        x.push(array[i][j]);
      } else {
        y.push(array[i][j]);
      }
    }
  }

  const years = [];

  for (let i = 0; i < x.length; i++) {
    if (x[i]>0 && x[i]<y[i] && y[i]>0) {
      let year = x[i];
      while (year < y[i]) {
        year++;
        years.push(year);
      }
    } else {
      return -1;
    }
  };

  const counts = years.reduce((prev, cur) => {
    prev[cur] = (prev[cur] || 0) + 1;
    return prev;
  }, {});

  let max = 0;
  let maxKey = '';

  for (const year in counts) {
    if (counts[year] > max) {
      max = counts[year];
      maxKey = year;
    }
  }

  return {maxKey, max};
};
```
## Questão 5
```javascript
const factorial = (number) => {
  if (number < 0) {
    return -1;
  } else if (number == 0) {
    return 1;
  } else {
    return (number * factorial(number - 1));
  }
};
```