                     //PRIMER EJERCICIO


function primerejercicio(){
    alert("¡Bienvenido de vuelta!.");
    let stocktotal = parseInt(prompt("¿Cual es la cantidad total de stock?."));
    let stockFaltante= stocktotal;
    let controlador = true;
    let segundocontrolador = true;

    
    if(isNaN(stocktotal)){
        alert("tienes que ingresar un numero");
    }else if(stocktotal == 0){
      alert("Ingresa un numero valido");
    }else{
        regalosRepartidos();
    }

    

    function regalosRepartidos(){

        while(controlador){
            let cuantosRepartidos = parseInt(prompt("El stock total es: " + stocktotal + "\n" + "El stock que queda para repartir es: " + stockFaltante + "\n" + "¿Cuantos regalos has repartido?"));
            stockFaltante -= cuantosRepartidos;
              
              if(stockFaltante == 0){
                alert("¡misión cumplida. Hasta el año que viene!");
                controlador = false;
              }else if(stockFaltante <= 100){
                if(segundocontrolador){
                    alert("OJO, que quedan menos de 100");
                    segundocontrolador =false;
                }
              }if(stockFaltante < 0){
                alert(" ERROR, te pasaste, vuelve a intentarlo");
                controlador = false;
              }else if(isNaN(cuantosRepartidos)){
                alert("tienes que ingresar un numero");
                controlador = false;
              }
        }
    
    }



}

//primerejercicio();










                      //SEGUNDO EJERCICIO

function segundoEjercicio(){
const alumnos = ["alfredo", "bernardo", "julio", "cesar", "eli", "ciado", "elgar", "banzo", "freddy", "cruger"];
let html =[];
let css = [];
let javascript = [];
let Nocurso = [];


for(let a = 0; a < alumnos.length; a++){
     let cursos = prompt(alumnos[a] + ",  ¿Ha que curso te quieres unir?");
       
      if(cursos == "html"){
        html.push(alumnos[a]);
      }else if(cursos == "css"){
        css.push(alumnos[a]);
      }else if(cursos == "javascript"){
        javascript.push(alumnos[a]);
      }else if(isNaN){
        alert("tienes que meterme a algun curso, vago.");
        Nocurso.push(alumnos[a])
      }
}


let totalHtml = html.length;
let totalCss = css.length;
let totalJavascript = javascript.length;
let totalNocurso = Nocurso.length;
alert("Los alumnos que se han unido al curso de HTML son:  " + html.toSorted() + ".\n" + "En total son: " + totalHtml);
alert("Los alumnos que se han unido al curso de CSS son:  " + css.toSorted() + ".\n" + "En total son: " + totalCss);
alert("Los alumnos que se han unido al curso de JavaScript son:  " + javascript.toSorted() + ".\n" + "En total son: " + totalJavascript);
alert("Los alumnos que no se han unido a un curso son:  " + Nocurso.toSorted() + ".\n" + "En total son: " + totalNocurso);
}

//segundoEjercicio()









                 //TERCER EJERCICIO

function tercerejercicio(){


let sumarOgastar = prompt("Tienes 250 PUNTOS." + "\n" + "¿Quieres sumar o gastar tus puntos?")
let controleixon = true;


// OBJETO-------------------

let PuntosGasolinera = {
    nombreCliente: "Paco",
    apellidoCliente: "Cervantez",
    emailCliente: "pacocervantez@gmail.com",
    cantidadPuntos: 250,

    //metodo1 SUUMAAR------------------
    sumarPuntos: function(almacenPts){
     almacenPts = this.cantidadPuntos;
      while(controleixon){
        let PreguntaRep = parseInt(prompt("Tienes: " + almacenPts + " en total.\n" + "¿Cuantos puntos quieres sumar?."));
        almacenPts += PreguntaRep;

        if(PreguntaRep == 0 || isNaN(PreguntaRep)){
          alert("Pon un numero valido.");
          controleixon = false;
        }else if(almacenPts >= 500){
          this.avisarCliente().sumarpts();
          controleixon = false;
        }
      }
    },
    
    //metodo2 GAASTAAR-----------------
    gastarPuntos: function(almacengastar){
      almacengastar = this.cantidadPuntos;
      while(controleixon){
      let preguntagast = parseInt(prompt("Tienes: " + almacengastar + " en total.\n" + "¿Cuantos puntos quieres gastar?."))
      almacengastar -= preguntagast;
      if(preguntagast == 0 || isNaN(preguntagast)){
        alert("Pon un numero valido");
        controleixon = false;
      }else if(almacengastar <= 0){
        this.avisarCliente().gastarpts();
        controleixon = false;
      }
      }
    },

    //metodo3 AAVIISAAR-------------------------
    avisarCliente: function(){

      //llama a la suma
      function sumarpts(){
        alert("has pasado el limite");
      }
      
      //llama a la resta/gastar
      function gastarpts(){
        alert("te has quedado sin puntos");
      }

      //devuelve los valores de las dos funciones
      return{
        sumarpts, gastarpts
      };
      

    },

}

//condicion, la respuesta del primer prompt:

if(sumarOgastar == "sumar"){
  PuntosGasolinera.sumarPuntos();
}else if( sumarOgastar == "gastar" ){
  PuntosGasolinera.gastarPuntos();
}

}


//tercerejercicio();



                              // TERCER EJERCICIO 2.0
                            


function tercerejercicio2(){


    let sumarOgastar = prompt("Tienes 250 PUNTOS." + "\n" + "¿Quieres sumar o gastar tus puntos?")
    let controleixon = true;
    
    
    // OBJETO-------------------
    
    let PuntosGasolinera = {
        nombreCliente: "Paco",
        apellidoCliente: "Cervantez",
        emailCliente: "pacocervantez@gmail.com",
        cantidadPuntos: 250,
    
        //metodo1 SUUMAAR------------------
        sumarPuntos: function(preguntasSuma){
            let almacensum = this.cantidadPuntos + preguntasSuma;
            this.avisarCliente().sumarpts(almacensum);
        },
        
        //metodo2 GAASTAAR-----------------
        gastarPuntos: function(preguntaGastar){
            let almacengas = this.cantidadPuntos - preguntaGastar;
            this.avisarCliente().gastarpts(almacengas);
        },
    
        //metodo3 AAVIISAAR-------------------------
        avisarCliente: function(){
    
          //llama a la suma
          function sumarpts(almacensum){
            if(almacensum >= 500){
                alert("Has pasado el limite de puntos, el limite es 500");
            }else if(almacensum < 500){
                alert("tu saldo final de puntos es: " + almacensum);
            }
          }
          
          //llama a la resta/gastar
          function gastarpts(almacengas){
            if(almacengas <= 0){
                alert("Te has quedado sin puntos: 0.");
            }else if(almacengas < 250){
                alert("tu saldo final de puntos es: " + almacengas);
            }
          }
    
          //devuelve los valores de las dos funciones
          return{
            sumarpts, gastarpts
          };
          
    
        },
    
    }
    
    //condicion, la respuesta del primer prompt:
    
    if(sumarOgastar == "sumar"){
        let preguntasSuma = parseInt(prompt("¿Cuantos puntos quieres sumar?\n" + "Tienes 250 Puntos"));
      PuntosGasolinera.sumarPuntos(preguntasSuma);
    }else if( sumarOgastar == "gastar" ){
        let preguntaGastar = parseInt(prompt("¿Cuantos puntos quieres gastar?\n" + "Tienes 250 Puntos"));
      PuntosGasolinera.gastarPuntos(preguntaGastar);
    }
    
    }
    
    
  //tercerejercicio2();
    







