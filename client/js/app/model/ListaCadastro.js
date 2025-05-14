class ListaCadastro{
    #listaCadastro

    constructor(){
        this.#listaCadastro = []

    }

    adiciona(cadastro) {
        this.#listaCadastro.push(cadastro)
    }

    paraArray(){
        return [].concat(this.#listaCadastro)
    }
   
    }