const form = document.getElementById("myForm")

form.addEventListener("submit", function(event){
    event.preventDefault();

    const usuario = document.getElementById("usuario").value;
    const contraseña = document.getElementById("contraseña").value;
    

    if(usuario === " "   ||contraseña === "" ||message ===""){
        alert("Por favor completa todos los campos")
    }else{
        alert("accedio exitosamente");
        form.requestFullscreen();
    }
})