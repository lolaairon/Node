const fs = require('fs')

let persona = {
    name: 'Dana' ,
    surname: 'Scully',
    age:41

}
let objeto = JSON.stringify(persona);

function imprimirNomber(objeto){

 fs.writeFile('persona.json',objeto ,(err)=>{
    if(err)
     console.log(err);
    else{
        console.log('Archivo ok ')
    }
 })

 fs.readFile('persona.json','utf-8',(err,objeto) =>{
    if(err)
     console.log(err);
    else{
        console.log(objeto)
    }
})
}
imprimirNomber(objeto);