document.addEventListener("DOMContentLoaded",()=> {
    const registroForm= document.getElementById("registroForm");
    const loginForm=document.getElementById("loginForm");

    if(registroForm){
        registroForm.addEventListener("submit",(info)=>{
            info.preventDefault();

            const nombre=document.getElementById("nombre").value;
            const correo=document.getElementById("correo").value;
            const clave=document.getElementById("clave").value;
            const mascota=document.getElementById("mascota").value;

            localStorage.setItem("usuario", JSON.stringify({nombre,correo,clave,mascota}));
            alert("Registro exitoso, ahora puedes ingresar")
            window.location.href= "./login.html";
        });
    }

    if(loginForm){
        loginForm.addEventListener("submit", (info)=>{
            info.preventDefault();
            const nombre=document.getElementById("nombre").value;
            const clave=document.getElementById("clave").value;
            const usuario=JSON.parse(localStorage.getItem("usuario"));
            if(usuario && usuario.clave === clave && usuario.nombre === nombre){
                alert(`Bienvenido ${usuario.nombre}`);
                window.location.href= "./panel.html";
            }
            else{
                alert('ingreso no posible')
            }

        });
    }
});