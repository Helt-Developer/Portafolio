//Funcion para iterar arreglos
input.forEach((input)=> {
    input.addEventListener('blur', (input) =>{
        validacionInput(input.target)
    })
})

const validacionInput = (input) => {
    const tipoDeInput = input.dataset.tipo;
    if(validador[input]){
        validador[tipoDeInput](input);
    }
}

const validador = {
    nombre: (input) => validaInput(input)
}