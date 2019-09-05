 var titulo =  document.querySelector('.titulo');
 titulo.textContent = 'Aparecida Nutricionista';
//  retirando o nome da linha de texto


var pacientes = document.querySelectorAll(".paciente");
    


for ( i = 0; i < pacientes.length ; i++) {
    
    var paciente = pacientes [ i ];
    
    var nomeDoPaciente = paciente.querySelector ( ".info-nome" ).textContent;

    var peso =  parseFloat( paciente.querySelector ( ".info-peso" ).textContent ) ;
        
    var altura = parseFloat( paciente.querySelector ( ".info-altura" ).textContent );
    
    var gordura = paciente.querySelector( ".info-gordura" ).textContent ;

    var imc = paciente.querySelector( ".info-imc" );
        
 

    if ( !validaPeso(peso) ) {
    
        imc.textContent = "Peso inválida!";

        paciente.classList.add("paciente-invalido");
        
    }
            
    if ( !validaAltura(altura) ) {
                
        paciente.classList.add("paciente-invalido");
                
        imc.textContent = 'Altura inválida!'
            
    } 
   if ( validaPeso( peso ) && validaAltura( altura ) ) {
        
        imc.textContent = calcularIMC( peso, altura)
    
    }

}



function calcularIMC( peso, altura){
     
    var imc = 0;

        imc =  ( peso / ( altura * altura ) ) 
        
        return imc.toFixed(2)

}


function validaPeso (peso) { 

    if ( peso >= 0 && peso <= 230 ) {

        return true
    
    }

    return false
     
}


function validaAltura (altura) {
    
    if(altura >= 0 && altura <= 2.30){
     
        return true;
    
    }

    return false;

}
