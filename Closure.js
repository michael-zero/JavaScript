
//Closure - função que quando declarada tem que lembrar do seu escopo léxico - vizinhos

//Escopo global - window
function nascimento(ano){
   //Escopo da mãe
   return function(){
        //Escopo do filho
        return ano;
   }
}

const maverick = nascimento(1998);
const oolong = nascimento(1999);

console.dir(maverick);
console.dir(oolong);

console.log(2020 - maverick(), 2020 - oolong())