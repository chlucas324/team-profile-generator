const { expect } = require('expect');
const { test } = require('jest-circus');
const { getMaxListeners } = require('process');
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Caitlin', '124280', 'chlucas324@gmaill.com', 'chlucas324');

test('gets engineer object', () => {
    expect(engineer.name).toBe('Caitlin');
    expect(engineer.id).toBe('124280');
    expect(engineer.email).toBe('chlucas324@gmail.com');
    expect(engineer.gitHubUserName).toBe('chlucas324');
});

test('gets engineer name', () => {
        expect(engineer.getName()).toBe('Caitlin');
    
});

test('gets engineer id', () => {
    expect(engineer.getId()).toBe('124280');
});

test('gets engineer email', () => {
    expect(engineer.getEmail()).toBe('chlucas324@gmail.com');
});

test('gets engineer gitHub username', () => {
    expect(engineer.getGitHub()).toBe('chlucas324');
});