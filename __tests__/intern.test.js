const Intern = require('../lib/Intern');
const intern = new Intern('Caitlin', '124280', 'chlucas324@gmail.com', 'UVA');

// creates intern object
test('gets intern object', () => {
    expect(intern.name).toBe('Caitlin');
    expect(intern.id).toBe('124280');
    expect(intern.email).toBe('chlucas324@gmail.com');
    expect(intern.school).toBe('UVA');
});

//gets intern name
test('gets intern name', () => {
    expect(intern.getName()).toBe('Caitlin');

});

// gets intern id
test('gets intern id', () => {
expect(intern.getId()).toBe('124280');
});

//gets intern email
test('gets intern email', () => {
expect(intern.getEmail()).toBe('chlucas324@gmail.com');
});

//gets intern school from getSchool()
test('gets intern school', () => {
    expect(intern.getSchool()).toBe('UVA');
});

//gets intern role from getRole()
test('gets intern role', () => {
    expect(intern.getRole()).toBe('Intern');
});