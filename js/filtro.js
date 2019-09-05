
var filtro = document.querySelector( '.filtro-tabela' );

filtro.addEventListener('input', function ( ) {    console.log(this.value)

    var pacientes = document.querySelectorAll( ".paciente" );
    console.log( this.value.length)

    if ( this.value.length !== 0 ) {

        for ( let i = 0; i < pacientes.length; i++ ) {
            const paciente = pacientes[i];
            const td = paciente.querySelector( '.info-nome' );
            const nome = td.textContent;
            console.log(nome, this.value);
            const expressaoRegular = new RegExp ( this.value, 'i' );

            if ( !expressaoRegular.test( nome ) ){
              
                paciente.classList.add( 'invisivel' )
            
            } else {
            
                paciente.classList.remove( 'invisivel' );
    
            }
    
        }
    
    } else {
        
        for (var i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }

    }
        
});