class Cadastro{
    #nome
    #genero
    #sinopse
    #nota

    constructor(){
        this.#nome = nome
        this.#genero = genero
        this.#sinopse
        this.#nota = nota

        Object.freeze(this)
    }

    get nome(){
        return this.#nome
    }

    get genero(){
        return this.#genero
    }

    get sinopse(){
        return this.#sinopse
    }

    get nota(){
        return this.#nota
    }
}