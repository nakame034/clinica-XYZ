//função para manipulação do DOM - Document Object Model
const galeria = function(){
    //pega todas as imagens que estao dentro de Galeria-Miniatura
    let miniaturas = document.querySelectorAll(".Galeria-Miniatura img")
    console.log(miniaturas)

    miniaturas.forEach(function (foto){
        foto.addEventListener("click", 
            function () {
                console.log(this.src)
                document.getElementById("foto-grande").src = this.src
            }
        )
    })
}

galeria()