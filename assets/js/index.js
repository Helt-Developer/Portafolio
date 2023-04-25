const inputNombre = document.querySelector('[data-nombre]');
const inputEmail = document.querySelector('[data-email]');
const inputAsunto = document.querySelector('[data-asunto]');

const formulario = document.querySelector('.formcontato__form');

//Fucniones Generales

//Funcion que valida si el campo esta vacio de los input
const validaInput = (e) => {
    const input_valor = e.target.value;
    const input = e.target;
    let mensaje = '';
    if(input_valor.length === 0){
        input.classList.add('input__invalid');
        mensaje = `El campo ${input.name} no debe estar vacío`;
        
    }else{
        input.classList.remove('input__invalid');
    }
    input.setCustomValidity(mensaje);
}

//funcion que evita el evento por defecto del formulario
const eventPrevent = (e) => e.preventDefault();

//Eventos a ejecutar
inputNombre.addEventListener('blur', validaInput);
inputEmail.addEventListener('blur', validaInput);
inputAsunto.addEventListener('blur', validaInput);
formulario.addEventListener('submit', eventPrevent);
