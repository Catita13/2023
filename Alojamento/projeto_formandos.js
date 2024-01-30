// Adiciona um ouvinte de eventos ao formulário com o id 'formulario' quando é submetido
document.getElementById('formulario').addEventListener('submit', registarReservas);

function registarReservas(e){
    // Obtém os valores dos inputs do formulário
    var nomeCliente = document.getElementById('nomeCliente').value;
    var emailCliente = document.getElementById('emailCliente').value;
    var alojamentoCliente = document.getElementById('alojamentoCliente').value;
    var dataentradaCliente = document.getElementById('dataentradaCliente').value;

    // Cria um objeto 'estadia' com os detalhes da reserva
    var estadia = {
        nome: nomeCliente,
        email: emailCliente,
        alojamento: alojamentoCliente,
        dataentrada: dataentradaCliente
    };
    
    // Verifica se existem reservas na localStorage
    if(localStorage.getItem('reservas') === null){
        // Se não existirem reservas, cria um novo array e adiciona a reserva atual
        var estadias = [];
        estadias.push(estadia);
        localStorage.setItem('reservas', JSON.stringify(estadias));
    } else {
        // Se existirem reservas, recupera o array, adiciona a nova reserva e atualiza a localStorage
        var estadias = JSON.parse(localStorage.getItem('reservas'));
        estadias.push(estadia);
        localStorage.setItem('reservas', JSON.stringify(estadias));
    }
    
    // Limpa o formulário e mostra as reservas
    document.getElementById('formulario').reset();
    mostraReservas();
    // Impede o comportamento padrão de submissão do formulário
    e.preventDefault();
}

function mostraReservas(){
    // Recupera as reservas da localStorage
    var estadias = JSON.parse(localStorage.getItem('reservas'));
    // Obtém o elemento HTML para mostrar as reservas
    var reservasResultado = document.getElementById('resultados');
    
    // Limpa o conteúdo anterior
    reservasResultado.innerHTML = '';

    // Itera sobre as reservas e gera dinamicamente HTML para exibi-las em uma tabela
    for (var i = 0; i < estadias.length; i++){
        var nome = estadias[i].nome;
        var email = estadias[i].email;
        var alojamento = estadias[i].alojamento;
        var dataentrada = estadias[i].dataentrada;

        reservasResultado.innerHTML += '<tr><td>' + nome + '</td>' +
            '<td>' + email + '</td>' +
            '<td>' + alojamento + '</td>' +
            '<td>' + dataentrada + '</td><td><button onclick="infoCliente(\'' + email + '\')" class="btn btn-info">Info</button></td>' +
            '<td><button onclick="checkoutCliente(\'' + email + '\')" class="btn btn-danger">Checkout</button></td></tr>';
    }        
}

function infoCliente(email) {
    // Recupera as reservas da localStorage
    var estadias = JSON.parse(localStorage.getItem('reservas'));

    for (var i = 0; i < estadias.length; i++){
        if(estadias[i].email == email){
            // Exibe informações sobre um cliente específico com base no seu email
            var nome = estadias[i].nome;
            var email = estadias[i].email;
            var alojamento = estadias[i].alojamento;
            var dataentrada = estadias[i].dataentrada;

            alert("Dados do cliente:" + "\nNome:" + nome +
                "\nEmail:" + email +
                "\nAlojamento:" + alojamento +
                "\nData de entrada:" + dataentrada);
        }
    }
}

function checkoutCliente(email){
    // Recupera as reservas da localStorage
    var estadias = JSON.parse(localStorage.getItem('reservas'));

    // Itera sobre as reservas
    for (var i = 0; i < estadias.length; i++){
        if(estadias[i].email == email){
            // Calcula o custo da estadia com base nas datas de entrada e saída
            var inicio = new Date(estadias[i].dataentrada);
            var hoje = new Date();
            var fim = new Date(hoje.getFullYear() + "-" + (hoje.getMonth() + 1) + "-" + hoje.getDate());

            var dias = parseInt((fim - inicio) / (24 * 3600 * 1000));

            var pagar;
            if (estadias[i].alojamento == "T1"){
                pagar = dias * 40;
            }
            else {
                pagar = dias * 60;
            }
            alert("O valor da estadia é:" + pagar.toFixed(2));

            // Remove a reserva da lista
            estadias.splice(i, 1);
        }
    }
    // Atualiza a localStorage e mostra as reservas
    localStorage.setItem('reservas', JSON.stringify(estadias));
    mostraReservas();
}