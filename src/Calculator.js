import React, { Component } from 'react';

class Calculator extends Component {
    constructor() {
        super();
        this.state = {
            displayValue: '0',
            operator: null,
            firstValue: '',
            waitingForSecondValue: false,
        };
    }

    inputDigit = (digit) => {
        const { displayValue, waitingForSecondValue } = this.state;

        if (waitingForSecondValue) {
            this.setState({
                displayValue: String(digit),
                waitingForSecondValue: false,
            });
        } else {
            this.setState({
                displayValue: displayValue === '0' ? String(digit) : displayValue + digit,
            });
        }
    };

    inputDecimal = () => {
        const { displayValue } = this.state;

        if (!displayValue.includes('.')) {
            this.setState({ displayValue: displayValue + '.' });
        }
    };

    clearDisplay = () => {
        this.setState({
            displayValue: '0',
        });
    };

    inputOperator = (nextOperator) => {
        const { displayValue, operator, firstValue } = this.state;
        const inputValue = parseFloat(displayValue);

        if (firstValue === '') {
            this.setState({
                firstValue: inputValue,
                waitingForSecondValue: true,
                operator: nextOperator,
            });
        } else {
            const calculation = this.performCalculation(firstValue, inputValue, operator);

            this.setState({
                displayValue: String(calculation),
                firstValue: calculation,
                waitingForSecondValue: true,
                operator: nextOperator,
            });
        }
    };

    performCalculation = (firstValue, secondValue, operator) => {
        switch (operator) {
            case '+':
                return firstValue + secondValue;
            case '-':
                return firstValue - secondValue;
            case '*':
                return firstValue * secondValue;
            case '/':
                return firstValue / secondValue;
            default:
                return secondValue;
        }
    };

    handleEquals = () => {
        const { firstValue, displayValue, operator } = this.state;
        const inputValue = parseFloat(displayValue);

        if (firstValue && operator) {
            const result = this.performCalculation(firstValue, inputValue, operator);
            this.setState({
                displayValue: String(result),
                firstValue: '',
                waitingForSecondValue: false,
                operator: null,
            });
        }
    };

    render() {
        const { displayValue } = this.state;

        return (
            <div className="calculator">
                <div className="display">{displayValue}</div>
                <div className="buttons">
                    <button onClick={() => this.inputDigit(7)}>7</button>
                    <button onClick={() => this.inputDigit(8)}>8</button>
                    <button onClick={() => this.inputDigit(9)}>9</button>
                    <button onClick={() => this.inputOperator('+')}>+</button>
                    <button onClick={() => this.inputDigit(4)}>4</button>
                    <button onClick={() => this.inputDigit(5)}>5</button>
                    <button onClick={() => this.inputDigit(6)}>6</button>
                    <button onClick={() => this.inputOperator('-')}>-</button>
                    <button onClick={() => this.inputDigit(1)}>1</button>
                    <button onClick={() => this.inputDigit(2)}>2</button>
                    <button onClick={() => this.inputDigit(3)}>3</button>
                    <button onClick={() => this.inputOperator('*')}>*</button>
                    <button onClick={this.inputDecimal}>.</button>
                    <button onClick={() => this.inputDigit(0)}>0</button>
                    <button onClick={this.handleEquals}>=</button>
                    <button onClick={() => this.inputOperator('/')}>/</button>
                    <button onClick={this.clearDisplay}>C</button>
                </div>
            </div>
        );
    }
}

export default Calculator;
