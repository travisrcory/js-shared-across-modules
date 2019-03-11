const add = (array) => array.reduce((accumulator, currentValue) => accumulator + currentValue);

const multiply = (array) => array.reduce((accumulator, currentValue) => accumulator * currentValue);

export {add, multiply};