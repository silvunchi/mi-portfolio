//Haz tú validación en javascript acá
$(document).ready(function () {

    $('#contactform').validate({
        errorElement: 'span',
        rules: {
            name: {
                required: true,
                minlength: [2],
            },
            email:"required",
            subject: {
                required: true, 
                minlength: [5],
            },
            message: {
                required: true, 
                minlength: [25],
            },
        },
        messages: {
            name:"Ingrese su Nombre, campo requerido *",
            email:"Ingrese un email valido, campo requerido *",
            subject: "Ingrese un asunto, campo requerido *",
            message:"Ingrese un mensaje, campo requerido *",
        },
        errorPlacement: function(error, element) {
            error.insertAfter(element)
            error.appendTo("div#errors");
            $(element).parent().next('span').html(error);
            $(element).addClass('invalid');
        }

    });


    if ($('#errors span').length) {
    $('#error-txt').show();
    }

});