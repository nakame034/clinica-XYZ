//chamar a funcao para validar o formulario

document.getElementById("form1").onsubmit = function () {
    return ValidaForm()
}

function validaForm() {
    //nome
    let nome = document.getElementById("nome").value.trim()
    if(nome.lenght < 3) {
        alert("informe o nome corretamente")
        document.getElementById("nome").focus()
        return false

    }

    
    //formulario sem erro
    return true
}