const {writeHelloWorld} = require("./index");
const path = require("path");
const fs = require("fs/promises");


describe("2. Probando la implementación de writeHelloWorld", () => {
    afterEach(() => {
        jest.restoreAllMocks();
        jest.resetAllMocks();
    });

    test('Debería de llamar al método writeFile', async() => {
    
        const writeFile = jest.spyOn(fs, "writeFile");
        
        writeHelloWorld();
    
        expect(writeFile).toHaveBeenCalledTimes(1);
        
    });

    test('WriteFile debería de llamarse con la ruta hacía hello.txt', async() => {
        const pathFile = path.resolve('hello.txt');
    
        const writeFile = jest.spyOn(fs, "writeFile");
        
        writeHelloWorld();
    
        expect(writeFile.mock.calls[0][0]).toBe(pathFile);
        
    });

    test('WriteFile debería de pasar como argumento el string hello world!', async() => {
    
        const writeFile = jest.spyOn(fs, "writeFile");
        
        writeHelloWorld();
    
        expect(writeFile.mock.calls[0]).toContain('hello world!');
    });

});
