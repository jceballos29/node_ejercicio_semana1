//Imports de los módulos
const fs = require('fs/promises')
const path = require('path')

const readFileUsers = async () => {
    //Imprimir en consola el arreglo de usuarios
    const userPath = path.resolve('./users.json')

    await fs.readFile(userPath, 'utf8', (data, err) => {
        if(err) throw err;
        console.log(JSON.parse(data))
    })
};

const writeHelloWorld = async () => {
    //Escribir hello world! en el archivo hello.txt
    const message = "hello world!";
    const hwPath = path.resolve('hello.txt')
    await fs.writeFile(hwPath,message,'utf8', err => {
        if(err) throw err;
    })
};

const addUser = async (username) => {
    //Agregar un usuario en la lista users.json
    const pathFile = path.resolve('users.json');
    let users= await fs.readFile(pathFile,'utf8')   
    let list = JSON.parse(users)
    list.push(username)
    let userlist = JSON.stringify(list)
    await fs.writeFile(pathFile,userlist)
};



//No hace falta ejecutar las funciones


module.exports = {
    readFileUsers,
    writeHelloWorld,
    addUser,
};
