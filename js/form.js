
btnAdicionarPaciente = document.querySelector( "#adicionar-paciente" );
console.log(btnAdicionarPaciente)
btnAdicionarPaciente.addEventListener ( "click" , function ( event ) {
    event.preventDefault();
    

    var form = document.querySelector( "#form-adiciona" );
        nome = form.nome.value;
        peso = form.peso.value; 
        altura = form.altura.value; 
        gordura = form.gordura.value;
        imc = calculeIMC(peso, altura);
    // pegar as informações do campos *formulário; *nome; *peso; *altura; *gordura
    // IMC foi
    


        pacienteTr = document.createElement( "tr" );    
    // cria a tag tr no html

       nomeTd = document.createElement( "td" );       
       pesoTd = document.createElement( "td") ;
       alturaTd = document.createElement( "td" );
       gorduraTd = document.createElement( "td" );
       imcTd = document.createElement ( "td" );
    // cria a tag td no html 

        nomeTd.textContent = nome;
        pesoTd.textContent = peso;
        alturaTd.textContent = altura;
        gorduraTd.textContent = gordura;
        imcTd.textContent = imc;
    // A tag criada TD é adicionado o valor do input escrito pelo user.
    
     

    var tabela = document.querySelector( '#tabela-pacientes' );
    // foi pego a tabela dos pacientes que é uma tdbody

    pacienteTr.appendChild( nomeTd ); 
    pacienteTr.appendChild( pesoTd );
    pacienteTr.appendChild( alturaTd );
    pacienteTr.appendChild( gorduraTd );
    pacienteTr.appendChild( imcTd );

    tabela.appendChild( pacienteTr );   
    // foi adicionado dentro do tbody as td de cada conteudo. 

    pacienteTr.classList.add( "paciente" );
    nomeTd.classList.add( "info-nome" );
    pesoTd.classList.add( "info-peso" );
    alturaTd.classList.add( "info-altura" );
    gorduraTd.classList.add( "info-gordura" );
    imcTd.classList.add( "info-imc");
    // foi adicionado as class no elemento.


    nome = form.nome.value = "" ;    
    peso = form.peso.value = "" ;
    altura = form.altura.value = "" ;
    gordura = form.gordura.value = "" ;
    // aqui com o value ;recebendo nada, remove o conteudo digitado pelo usario

    
} );