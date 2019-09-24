
var user = document.getElementById("user");
var pass = document.getElementById("pass");
function iniciar(){
    
    /*if(user.value.log)*/
    if(user.value == "admin" && pass.value == "admin"){
        console.log("credenciales validas");
        window.location = "./paneladmin.html";
    }else if (user.value == "user" && pass.value == "user"){
        console.log("credenciales validas");
        window.location = "./panelusuario.html";
    } else {
        alert("usuario y/o contraseña incorrectos");
    }
}

function validar(e) {
 	 tecla = (document.all) ? e.keyCode : e.which;
 	 if (tecla==13){
		 iniciar();
	}
}
    /*console.log(user.value);
    console.log(pass.value);*/
var e=document.getElementById("mostrar");
function cambio() { 
        if(e.id=="mostrar"){
            e.id="mostrar2"; 
               
        } else if (e.id == "mostrar2"){
            e.id="mostrar";
        }
    
}
var p=document.getElementById("pass");
function mostrar(){
    if(p.type=="password"){
        p.type="text";
    }else if (p.type=="text"){
        p.type="password";
    }

}

function mostrarPassword(){
    var cambio = document.getElementById("pass");
    if(cambio.type == "password"){
        cambio.type = "text";
        $('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio.type = "password";
        $('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 

$(document).ready(function () {
//CheckBox mostrar contraseña
$('#ShowPassword').click(function () {
    $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
});
});
