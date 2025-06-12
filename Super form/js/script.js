$('#cep').on('blur', function(){
    let cep = $('#cep').val().replace(/\D/g, '');
    if(cep.length == 8){
        $.ajax({
            url: `https://viacep.com.br/ws/${cep}/json/`,
            type: 'GET',
            dataType: 'json',
            success: function(retorno){
                if(retorno.erro){
                    alert('CEP não encontrado')
                } else {
                    $('#rua').val(retorno)
                }
            },
            error: function(){}
        });
    } else {
        alert('Digite o CEP correto seu BURRO!');
    }

})