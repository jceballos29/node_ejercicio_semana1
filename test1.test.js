const {readFileUsers} = require("./index");
const path = require("path");
const fs = require("fs/promises");

describe("1. Probando la implementación de readFileUsers", () => {
    afterEach(() => {
        jest.restoreAllMocks();
        jest.resetAllMocks();
    });

    test('Debería de llamar al método readFile', async() => {
    
        const readFile = jest.spyOn(fs, "readFile");
        
        readFileUsers();
    
        expect(readFile).toHaveBeenCalledTimes(1);
        
    });

    test('ReadFile debería de llamarse con el argumento de la ruta hacía users.json', async() => {
        const pathFile = path.resolve('users.json');
    
        const readFile = jest.spyOn(fs, "readFile");
        
        readFileUsers();
    
        expect(readFile.mock.calls[0][0]).toBe(pathFile);
        
    });

    test('ReadFile debería de llamarse con el argumento de codificación utf8', async() => {
    
        const readFile = jest.spyOn(fs, "readFile");
        
        readFileUsers();
    
        expect(readFile.mock.calls[0]).toContain('utf8');
    });

});

