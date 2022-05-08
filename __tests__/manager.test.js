const Manager = require('../lib/Manager');
const manager = new Manager('Caitlin', '124280', 'chlucas324@gmail.com', '243');

// creates manager object
test('gets manager object', () => {
    expect(manager.name).toBe('Caitlin');
    expect(manager.id).toBe('124280');
    expect(manager.email).toBe('chlucas324@gmail.com');
    expect(manager.officeNumber).toBe('243');
});

//gets manager name
test('gets manager name', () => {
    expect(manager.getName()).toBe('Caitlin');
});

//gets manager id
test('gets manager id', () => {
    expect(manager.getId()).toBe('124280');
});

//gets manager email
test('gets manager email', () => {
    expect(manager.getEmail()).toBe('chlucas324@gmail.com');
});

//gets manager office number from getOffice Number()
test('gets manager office number', () => {
    expect(manager.getOfficeNumber()).toBe('243');
});

//gets manager role from getRole()
test('gets manager role', () => {
    expect(manager.getRole()).toBe('Manager');
});