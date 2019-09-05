function obtemPacientesDoFormulario ( form ) {

    var paciente = {
        
        $nome: form.nome.value,

        $peso: form.peso.value,

        $altura: form.altura.value,

        $gordura: form.gordura.value ,

        $imc: calcularIMC( form.peso.value, form.altura.value ) 
    }
 
    return paciente;
   
}


function montarTr ( paciente ) {

// colocou o parametro paciente para inserir as informações na td. 

    var $tabela = document.querySelector( '#tabela-pacientes' );
    var pacienteTr = document.createElement( "tr" );
    // cria a tag tr no html

    pacienteTr.appendChild( montaTd( paciente.$nome, "info-nome") ); 
    pacienteTr.appendChild( montaTd( paciente.$peso, "info-peso") );
    pacienteTr.appendChild( montaTd( paciente.$altura, "info-altura" ) );
    pacienteTr.appendChild( montaTd( paciente.$gordura, "info-gordura" ) );
    pacienteTr.appendChild( montaTd( paciente.$imc, "info-imc"  ) ) ;
  
    pacienteTr.classList.add( 'paciente' )
    $tabela.appendChild( pacienteTr );   
    // foi adicionado dentro do tbody as td de cada conteudo. 

    return pacienteTr

}


function montaTd ( dado, classe ){
    
    var td = document.createElement( "td" )
    
    td.textContent = dado;
    
    td.classList.add( classe )

    return td
}


function validaPaciente ( paciente ) {
    
    var erros = []; 

    if ( paciente.$nome.length === 0) {

        erros.push( "Nome não pode ser em branco" )
    
    }


    if ( paciente.$peso.length === 0){

        erros.push( "Peso não pode ficar em branco" )

    }


    if ( !validaPeso( paciente.$peso ) ) { 
    
        erros.push( "Peso inválido" ); 
    
    }


    if ( paciente.$altura.length === 0 ){

        erros.push ( "Altura não pode ficar em branco" );
    
    }


    if ( !validaAltura( paciente.$altura ) ) {
        
        erros.push( "Altura inválida" )
    
    }


    if ( paciente.$gordura.length === 0 ){
        
        erros.push ( "Gordura não pode ficar em branco" )
    
    }

    
    return erros;
} 


function exibeMensagensDeErro ( erros ) {

    var ul = document.querySelector( "#mensagem" ) ;
    ul.innerHTML = '';
  
    
    erros.forEach(function(cadaErro){
        
        var li = document.createElement( "li" );
        
        li.classList.add( "mensagem-erro" );
        
        li.textContent = cadaErro;
        
        ul.appendChild(li)
    });
    
    console.log(ul)
}







btnAdicionarPaciente = document.querySelector( "#adicionar-paciente" );

btnAdicionarPaciente.addEventListener ( "click" , function ( event ) {
   
    event.preventDefault();

    var form = document.querySelector( "#form-adiciona" );

    var paciente = obtemPacientesDoFormulario ( form );
   // obtenha do objeto paciente as informações do campos *formulário; *nome; *peso; *altura; *gordura

    var erros = validaPaciente( paciente );

    if (erros.length > 0) {
         
        var mensagem = exibeMensagensDeErro( erros ) ;
     
        
        return
        
    }

    var pacienteTr = montarTr( paciente );

    form.reset();
        
    var apagarMsg = document.querySelector( "#mensagem" );
        
    apagarMsg.innerHTML='';
    
} );
