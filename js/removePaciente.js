// var pacientes = document.querySelectorAll( ".paciente" )

// pacientes.forEach(function(paciente){
//     console.log(paciente)

//     paciente.addEventListener( 'dblclick', function ( ) {
//         this.remove()
//     } )

// })

var tabela = document.querySelector('#tabela-pacientes');


tabela.addEventListener('dblclick', function ( event ){
    // var filho = event.target;
    // var pai = filho.parentNode;
    // pai.remove();
    event.target.parentNode.classList.add("fadeOut");
    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500)
    

} )
