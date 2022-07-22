import Calculator from '../functions/calculator';

test('Should add two numbers', () => {
    expect(Calculator.add(1, 2)).toBe(3);
    expect(Calculator.add(-2, 12)).toBe(10);
})

test('Should subtract two numbers', () => {
    expect(Calculator.subtract(10, 2)).toBe(8);
    expect(Calculator.subtract(-2, 12)).toBe(-14);
})

test('Should multiply two numbers', () => {
    expect(Calculator.multiply(10, 2)).toBe(20);
    expect(Calculator.multiply(-2, 12)).toBe(-24);
    expect(Calculator.multiply(0, 12)).toBe(0);
})

test('Should divide two numbers', () => {
    expect(Calculator.divide(10, 2)).toBe(5);
    expect(Calculator.divide(12, -2)).toBe(-6);
    expect(Calculator.divide(0, 12)).toBe('Cannot divide by zero');
})
