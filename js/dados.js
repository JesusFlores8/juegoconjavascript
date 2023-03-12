function lanzardados() {
    let dado1 =  getNumRand(1, 6);
    let dado2 =  getNumRand(1, 6);
    let suma = dado1 + dado2;
    let menor = document.querySelector('input[name="menor"]:checked');


   
    $({ deg: 0 }).animate({ deg: 360 }, {
        duration: 600,
        step: function (now) {
            var scale = (1 * now / 360);
            $('#ImgDado1').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
            $('#ImgDado2').css({
                transform: 'rotate(' + now + 'deg) scale(' + scale + ')'
            });
        }
    }); 
 

    document.getElementById("ImgDado1").src="../img/dados/"+dado1+".svg";
    document.getElementById("ImgDado2").src="../img/dados/"+dado2+".svg";    
    document.getElementById("SumaDados").innerHTML = suma;


        // if(suma <= 6){
        //     document.write("<h1><center>GANARON LOS MENORES</center></h1>");
        //     window.location.href = "dados2.html";
        // }
        
    if(suma==7)
    {
        document.write("<h1><center>LA CASA GANA</center></h1>");
        window.location.href = "dados1.html";
    }
    //  }else{
    //     document.write("<h1><center>GANARON MAYORES</center></h1>");
    //     window.location.href = "dados3.html";
    //     document.getElementById("SumaDados").innerHTML = suma;
    // } */
   
    
    //$('#ImgDado1').attr("src", "../img/dados/"+dado1+".svg");
    //$('#SumaDados').html(suma);
    
}