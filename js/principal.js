 var titulo =  document.querySelector('.titulo');
 titulo.textContent = 'Aparecida Nutricionista';
//  retirando o nome da linha de texto


var pacientes = document.querySelectorAll(".paciente");
    


for ( i = 0; i < pacientes.length ; i++) {
    
    var paciente = pacientes [ i ];
        peso =  parseFloat( paciente.querySelector ( ".info-peso" ) .textContent ) ;
        
        altura = parseFloat( paciente.querySelector ( ".info-altura" ) .textContent );
    
        nomeDoPaciente = paciente.querySelector ( ".info-nome" ) .textContent;
    
        imc = paciente.querySelector ( ".info-imc" );

        pesoCerto = true;
        // valida o peso
        alturaCerta = true;
        // valida o altura

    if ( peso <= 0 || peso >= 230 ) {

        imc.textContent = "Peso inválida!";
        
        pesoCerto = false;
        
        paciente.classList.add ( "paciente-invalido" ); 
    }

    if(altura <= 0 || altura >= 2.30){

        imc.textContent = 'Altura inválida!'
        
        alturaCerta = false;
        
        paciente.classList.add("paciente-valido");
    } 

    if( alturaCerta && pesoCerto){
        
        imc = calculeIMC ( peso, altura)
    }

}



function calculeIMC( peso, altura ){

    return imc.textContent =  ( peso / ( altura * altura ) ).toFixed(2);
    
}


