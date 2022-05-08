const { expect } = require('expect');
const { test } = require('jest-circus');
const { getMaxListeners } = require('process');
const Engineer = require('../lib/Engineer');
const engineer = new Engineer('Caitlin', '124280', 'chlucas324@gmail.com', 'chlucas324');

//creates engineer object
test('gets engineer object', () => {
    expect(engineer.name).toBe('Caitlin');
    expect(engineer.id).toBe('124280');
    expect(engineer.email).toBe('chlucas324@gmail.com');
    expect(engineer.gitHubUserName).toBe('chlucas324');
});

//gets engineer name
test('gets engineer name', () => {
    expect(engineer.getName()).toBe('Caitlin');

});

//gets engineer id
test('gets engineer id', () => {
    expect(engineer.getId()).toBe('124280');
});

//gets engineer email
test('gets engineer email', () => {
    expect(engineer.getEmail()).toBe('chlucas324@gmail.com');
});

//gets github username from getGitHub()
test('gets engineer gitHub username', () => {
    expect(engineer.getGitHub()).toBe('chlucas324');
});

// gets role from getRole()
test('gets engineer role', () => {
    expect(engineer.getRole()).toBe('Engineer');
});