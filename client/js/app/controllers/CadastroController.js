class CadastroController{
    #inputNome
    #inputGenero
    #inputSinopse
    #inputNota
    #listaCadastro

    constructor(){
        let $ = document.querySelector.bind(document)

        this.#inputNome = $("#nome")
        this.#inputGenero = $("#genero")
        this.#inputSinopse = $("#sinopse")
        this.#inputNota = $("#nota") 

        this.#listaCadastro = new ListaCadastro()
    }
    
    adiciona(e){
        e.preventDefault();
        
        this.#listaCadastro.paraArray().length = 0
        console.log(this.#listaCadastro.paraArray())
        
        console.log(this.#inputNome.value)
        console.log(this.#inputGenero.value)
        console.log(this.#inputSinopse.value)
        console.log(this.#inputNota.value)

    
    }
}