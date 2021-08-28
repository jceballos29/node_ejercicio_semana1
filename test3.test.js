const {addUser} = require("./index");
const path = require("path");
const fs = require("fs/promises");

describe("3. Probando la implementación de appUser", () => {
    afterEach(() => {
        jest.restoreAllMocks();
        jest.resetAllMocks();
    });

    beforeEach(async() => {
        const userlist = JSON.stringify([
            "Hector",
            "Eduardo",
            "Sandra",
            "Ana",
            "Saúl"
        ]);

        try{
            await fs.writeFile(path.resolve("users.json"), userlist);
        }catch(error){
            throw new Error("Notificar de este error al instructor");
        }
    });

    test('Debería de obtener la lista de usuarios', async() => {
    
        const readFile = jest.spyOn(fs, "readFile");
        
        await addUser("Academlo");
    
        expect(readFile).toHaveBeenCalledTimes(1);
        
    });

    test('Debería de pasar como argumento la ruta de users.json a readFile', async() => {
        const pathFile = path.resolve('users.json');
    
        const readFile = jest.spyOn(fs, "readFile");
        
        await addUser("Academlo");
    
        expect(readFile.mock.calls[0][0]).toBe(pathFile);
        
    });

    test('Debería de llamar al método writeFile', async() => {
    
        const writeFile = jest.spyOn(fs, "writeFile");
        
        await addUser("Academlo");
    
        expect(writeFile).toHaveBeenCalledTimes(1);
    });

    test('Debería de llamar al método writeFile con la lista de usuarios + username como argumento', async() => {
        
        const userlist = JSON.stringify([
            "Hector",
            "Eduardo",
            "Sandra",
            "Ana",
            "Saúl",
            "Academlo"
        ]);

        const writeFile = jest.spyOn(fs, "writeFile");
        
        await addUser("Academlo");
    
        expect(writeFile.mock.calls[0][1]).toBe(userlist);
    });

});
