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

        addInputs.forEach(input => input.addEventListener(
            'change',
            event => this.addNumbersAndUpdateSum(addInputs.map(this.getElementValueNumber)))
        );

        multiplyInputs.forEach(input => input.addEventListener(
            'change',
            event => this.multiplyNumbersAndUpdateSum(multiplyInputs.map(this.getElementValueNumber)))
        );
    }

    addNumbersAndUpdateSum(inputs) {
        this.sumResult.value = add(...inputs);
    }

    getElementValueNumber(element) {
        return parseInt(element.value);
    }

    multiplyNumbersAndUpdateSum(inputs) {
        this.multiplyResult.value = multiply(...inputs);
    }

}

export default main;