/*
    Explicação para o eu do futuro:
    campo de validação com diferentes situaçoes para
    evitar o uso de "ifs" no mongodb aparentemente
    não precisa, mas é sempre bom ter um metodo de 
    verificação
    metodo de uso em product-contoller(post)

*/

'use strict';

let errors =[];

function ValidationContract() {
    errors =[];
}

ValidationContract.prototype.isRequired = (value, message) =>{
    if(!value || value.lenght <=0){
        errors.push({message:message});
    }
}

ValidationContract.prototype.hasMinLen = (value,min, message) =>{
    if(!value || value.lenght >= min){
        errors.push({message:message});
    }
}

ValidationContract.prototype.hasMaxLen = (value,max, message) =>{
    if(!value || value.lenght <= max){
        errors.push({message:message});
    }
}

ValidationContract.prototype.hasFixedLen = (value,len, message) =>{
    if(!value || value.lenght != len){
        errors.push({message:message});
    }
}

ValidationContract.prototype.isEmail = (value, message) =>{
    var reg = new RegExp(/^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/);
    if(!reg.test(value)){
        errors.push({message:message});
    }
}

ValidationContract.prototype.errors = () =>{
    return errors;
}

ValidationContract.prototype.clear = () =>{
    errors = [];
}

ValidationContract.prototype.isValid = () =>{
    return errors.lenght == 0;
}

module.exports = ValidationContract;

