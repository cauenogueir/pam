function mensagem(){

    let msg = 'hello pipou'
    return msg 
}

console.log(mensagem())

const nome = () => {

    return 'joao'
}

console.log(nome())

function lindaMensagem (parametro) {

   return console.log("A sua mensagme é: ",parametro)
}

lindaMensagem("java é bom! É incrivel!")
lindaMensagem(3)
lindaMensagem("coitado do juarez por me aguentar nas segundas")