const { expect } = require('expect');
const { test } = require('picomatch');
const Manager = require('../lib/Manager');
const manager = new Manager('Caitlin', '124280', 'chlucas324@gmail.com', '243');

test('gets manager object', () => {
    expect(manager.name).toBe('Caitlin');
    expect(manager.id).toBe('124280');
    expect(manager.email).toBe('chlucas324@gmail.com');
    expect(manager.officeNumber).toBe('243');
});

test('gets manager name', () => {
    expect(manager.getName()).toBe('Caitlin');
});

test('gets manager id', () => {
    expect(manager.getId()).toBe('124280');
});

test('gets manager email', () => {
    expect(manager.getEmail()).toBe('chlucas324@gmail.com');
});

test('gets manager office number', () => {
    expect(manager.getOfficeNumber()).toBe('243');
});

test('gets manager role', () => {
    expect(manager.getRole()).toBe('Manager');
});