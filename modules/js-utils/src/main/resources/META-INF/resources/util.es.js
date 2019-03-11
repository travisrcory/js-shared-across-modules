const multiply = (array) => array.reduce((accumulator, currentValue) => accumulator * currentValue);

const add = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue);

export {add, multiply};