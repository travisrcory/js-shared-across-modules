import {add, multiply} from 'js-utils/util.es';

class main {
    constructor(namespace) {
        this.sumResult = document.getElementById(`${namespace}addNumberResult`);
        this.multiplyResult = document.getElementById(`${namespace}multiplyNumberResult`);

        const addInputs = [
            document.getElementById(`${namespace}addNumberA`),
            document.getElementById(`${namespace}addNumberB`)
        ];

        const multiplyInputs = [
            document.getElementById(`${namespace}multiplyNumberA`),
            document.getElementById(`${namespace}multiplyNumberB`)
        ];

        addInputs.forEach(input => input.addEventListener('change', event => this.addNumbersAndUpdateSum(addInputs)));

        multiplyInputs.forEach(input => input.addEventListener('change', event => this.multiplyNumbersAndUpdateSum(multiplyInputs)));
    }

    addNumbersAndUpdateSum(inputs) {
        this.sumResult.value = add([parseInt(inputs[0].value), parseInt(inputs[1].value)]);
    }

    multiplyNumbersAndUpdateSum(inputs) {
        this.multiplyResult.value = multiply([parseInt(inputs[0].value), parseInt(inputs[1].value)]);
    }
}

export default main;