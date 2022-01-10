var itens = [];

// Aqui eu adicionei um evento ao botão Cadastrar
document.querySelector('input[type=submit]')
.addEventListener('click', function(){

    //Capturar o nome do produto e valor
    //value = para capturar o valor
    var nomeProduto = document.querySelector('input[name="nome_produto"]').value;
    var precoProduto = document.querySelector('input[name="price"]').value;



    //cadastrar o array itens
    // push = Para adicionar um novo item ao array
    itens.push({

        nome: nomeProduto,
        valor: precoProduto

    });

     //Toda vez que adicionar um item:
    /*
         <div class="lista-produto-single">
             <h3>RedBull</h3>
            <h3 class="price-produto"><span>20,00</span></h3>
          </div>       
    */    

    //pegando a classe lista-produtos
    let listaProdutos = document.querySelector('.lista-produtos');
    //Deixando o listaProduto vazio.
    listaProdutos.innerHTML = "";  
    
    // Para calcular
    let soma = 0


    //função com parametro val
    // map é como se tivese fazendo um loop nos do array itens para recuperar cada valor.
    itens.map(function(val){

        //soma
        soma+=parseFloat(val.valor);

        // pegando a classe lista produto e inserindo conteúdo dentro.
        // Substituir o que tem dentro do h3 por <h3>`+val.nome+`</h3>
        // pegando o valor de dentro do array(+val.nome+).
        listaProdutos.innerHTML+=`
         <div class="lista-produto-single">
            <h3>`+val.nome+`</h3>
            <h3 class="price-produto"><span>R$`+val.valor+`</span></h3>
          </div>          
        `

    });

    // toFixed para deixar apenas com duas casas decimais.
    soma = soma.toFixed(2);

    // Mudando a soma do display
    let elemetoSoma = document.querySelector('.soma-produto h1');
    
    elemetoSoma.innerHTML = 'TOTAL:'+' R$'+ soma;
    

});

// Para limpar os itens
document.querySelector('button[name="limpar"]')
.addEventListener('click', function(){

    itens= [];

    document.querySelector('.lista-produtos')
    .innerHTML = "";

    document.querySelector('.soma-produto h1')
    .innerHTML = "TOTAL: R$0";

});
