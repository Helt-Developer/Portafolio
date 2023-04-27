const formulario = document.querySelector('.formcontato__form');
const inputs = document.querySelectorAll(".formcontato__input");
const textArea = document.querySelector("formcontato__textarea");

//Objeto que contiene expresiopnes regulares
const expresionesRegulares = {
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	asunto: /^[a-zA-ZÀ-ÿ\s]{1,50}$/,
    mensaje: /^[a-zA-ZÀ-ÿ\s]{1,300}$/
}
//Funciones Generales

//Funcion que valida la longitud de caracteres de cada input
const validaCaracteres = (e) => {
    console.log(e);
    switch(e.target.name){
        case "nombre": 
            validaCampo(expresionesRegulares.nombre, e.target, "nombre");
        break;

        case "email":
            validaCampo(expresionesRegulares.nombre, e.target, "email");
        break;

        case "asunto":
            validaCampo(expresionesRegulares.nombre, e.target, "asunto");
        break;

        case "mensaje":
            validaCampo(expresionesRegulares.mensaje, e,target, "mensaje");

    }
}

//Funcion de abstracion
const validaCampo = (expresiones, input, campo) => {
    if(expresiones.test(input.value)){
        document.querySelector(`.formcontato__${campo}`).classList.add("input__valid");
        document.querySelector(`.formcontato__${campo}`).classList.remove("input__invalid");
    }else{
        document.querySelector(`.formcontato__${campo}`).classList.add("input__invalid");
        document.querySelector(`.formcontato__${campo}`).classList.remove("input__valid");
       
    }
}
//Funcion que valida si el campo esta vacio de los input
const validaInput = (e) => {
    const input_valor = e.target.value;
    const input = e.target;
    //console.log(input_valor);
    let mensaje = '';
    if(input_valor.length === 0){
        input.classList.add('input__invalid');
        mensaje = `El campo ${input.name} no debe estar vacío`; 
        
    }else{
        input.classList.remove('input__invalid');
    }
    input.setCustomValidity(mensaje);
}
// textArea.addEventListener('keyup',validaCaracteres);
// textArea.addEventListener('blur', validaInput);
//Iterar inputs, por cada uno comprueba que no esten vacios
inputs.forEach((input) => {
    console.log(input);
    input.addEventListener('blur', validaInput);
    input.addEventListener('keyup', validaCaracteres);
})

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
})





