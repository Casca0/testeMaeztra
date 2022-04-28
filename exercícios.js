/* eslint-disable no-unused-vars */

// Questão 1

const isSorted = (array) => {
  // eslint-disable-next-line max-len
  if (array.every((value, index) => !index || (value >= array[index - 1])) == true || array.every((value, index) => !index || (value <= array[index - 1])) == true) {
    return `Input ${array.toString()} -> Está ordenado`;
  } else {
    return `Input ${array.toString()} -> Não está ordenado`;
  };
};

// Questão 2

const isRepeated = (array) => {
  return array.filter((item, index) => array.indexOf(item) !== index);
};

// Questão 3

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

// Questão 4

const test = [[1960, 2005], [1945, 2008], [1938, 1999]];

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

// Questão 5

const factorial = (number) => {
  if (number < 0) {
    return -1;
  } else if (number == 0) {
    return 1;
  } else {
    return (number * factorial(number - 1));
  }
};
