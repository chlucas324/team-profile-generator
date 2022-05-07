const { expect } = require('expect');
const { test } = require('picomatch');
const Employee = require('../lib/Employee');
const employee = new Employee('Caitlin', '124280', 'chlucas324@gmail.com');

test('creates an employee object', () => {
    expect(employee.name).toBe('Caitlin');
    expect(employee.id).toBe('124280');
    expect(employee.email).toBe('chlucas324@gmail.com');
});

test('gets employee name', () => {
    expect(employee.getName()).toBe('Caitlin');
});

test('gets employee role', () => {
    expect(employee.getRole()).toBe('Employee');
});

test('gets employee id', () => {
    expect(employee.getId()).toBe('124280');
})

test('gets employee email', () => {
    expect(employee.getEmail()).toBe('chlucas324@gmail.com');
});
