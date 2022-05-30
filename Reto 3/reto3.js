const fs = require ('fs');
const {stdin,stdout}= require('process');
const rl = require('readline');

let persona = {
    'name' : '',
    'surname' : '',
    'age': 0
}
let input = rl.createInterface(stdin,stdout);

input.question('Nombre: ' , (date) =>{
    persona.name = date;
input.question('Apellido: ', (date)=>{
    persona.surname = date;
input.question('Edad: ',(date)=>{
    persona.age = date;
    input.close();

    function imprimirNomber(persona){

        let dateString = JSON.stringify(persona);
        fs.writeFile('persona.json',dateString ,(err)=>{
           if(err)
            console.log(err);
           else{
               console.log('Archivo ok ')
           }
        })
       
        fs.readFile('persona.json','utf-8',(err) =>{
           if(err)
            console.log(err);
           else{
               console.log('Archivo leido')
           }
       })
       }
       imprimirNomber(persona);
});
});
});

