const add = (...args) => args.reduce((accumulator, currentValue) => accumulator + currentValue);

const multiply = (...args) => args.reduce((accumulator, currentValue) => accumulator * currentValue);

export {add, multiply};