
//DOM

//QUERYSELECTOR SOLO SE PUEDE SELECIONAR UN ELEMENTOA A LA VEZ
/* let table = document.querySelector(".table");

console.log(table); */


//SELECCCIONAR MULTIPLES ELEMENTOS

/* let links = document.querySelectorAll("a");

links.forEach(function(link){
console.log(link);
})
 */
//ARREGLOS



/* console.log(links) */


/* let celdas = document.querySelectorAll("td");

celdas.forEach(function(td){
    td.addEventListener('click',function(){
        console.log(this)
    });
}) */


//Obtener los elementos de la clase .close
//recorrerlos
//agregar un evento click a cada uno de ellos


/* let links = document.querySelectorAll(".close"); */


/* links.forEach(function(link){

    //DESACTIVAR UNA FUNCION
    link.addEventListener("click", function(evento){
        evento.preventDefault();

        return false;
    })
}) */

//QUITAR CLASES Y PONER CLASES

/* let iconos = document.querySelectorAll("i");

iconos.forEach(function(iconos){

    iconos.classList.remove("fa-star");
    iconos.classList.remove("fa-star-half-alt");
}) */


//QUITARLE LAS CLASES DE ANIMACION
//AGREGAR CLASES PARA ANIMAR SU SALIDA FADEOUTUP

let links = document.querySelectorAll(".close");

links.forEach(function(link){

    link.addEventListener("click",function(ev){
        ev.preventDefault();
        let content = document.querySelector('.content');
    
    
        content.classList.remove("animate__fadeInDown");
        content.classList.remove("animate__animated");


        content.classList.add("animate__fadeOutUp");
         content.classList.add("animate__animated");


         setTimeout(function(){
             location.href = "/boletines";
         },1000);
        

    return false;
    });
});






