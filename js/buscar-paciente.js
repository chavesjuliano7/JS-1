
var botaoAdicionarPacientes = document.querySelector('#buscar-pacientes');


botaoAdicionarPacientes.addEventListener('click', function ( ) { 
    console.log( 'buscando Paciente...' );
    
    var xhr = new XMLHttpRequest

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    var statusJson = document.querySelector('#msgStatus')


    xhr.addEventListener('load', function(){

        if (xhr.status === 200 ) {
            statusJson.classList.add('invisivel');

            var resposta = xhr.responseText;
            
            var pacientes = JSON.parse(resposta)
        
            pacientes.forEach(function(paciente){
    
                adicionePacienteNoForm(paciente)
                console.log(paciente);
            
            })

        } 

        else {
            
            statusJson.classList.remove('invisivel');

            console.log( xhr.status )
            
            console.log(xhr.responseText)
        
        }
        
    })

    xhr.send();

    
} )
