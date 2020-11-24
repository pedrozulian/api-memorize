
const ajax = new XMLHttpRequest();


// GET nos compromissos que estão guardados no banco de dados;
function getDescriptions() {
    ajax.open('GET', 'https://api-afazeres.herokuapp.com/description', true);
    ajax.send();
    ajax.responseType = 'json';

    try {
        ajax.onreadystatechange = function() {
            if (ajax.readyState == 4 && ajax.status == 200) {
                const data = ajax.response;
                const descriptions = [];

                data.map((el) => {
                    insertLineTable(el.date, el.description);
                });
            }
        }
    } catch (err) {
        console.log(err);
    }
}
getDescriptions();

// POST novo compromisso
function postDescription(dt, desc) {
    ajax.open('POST', 'https://api-afazeres.herokuapp.com/new-description', true);
    ajax.setRequestHeader('Content-Type', 'application/json');
    try {
      ajax.send(JSON.stringify( { date: dt, description: desc } ));
    } catch (err) {
        console.log(err);
    }
}

// DELETE compromisso
function removeDescription(desc) {
    ajax.open('POST', 'https://api-afazeres.herokuapp.com/del-description', true);
    ajax.setRequestHeader('Content-Type', 'application/json');
    try {
        ajax.send(JSON.stringify( { description: desc } ));
    } catch (err) {
        console.log(err);
    }
}

var tbodyRef = document.getElementById('tbAfazeres').getElementsByTagName('tbody')[0];

var btnSubmitCompromisso = document.getElementById('submitDescricao');
btnSubmitCompromisso.addEventListener("click", () => {
    var descricao = document.getElementById('descricao').value;
    submitLine(descricao);
});

function insertLineTable(dt, desc) {
    var line = tbodyRef.insertRow(1);
    var date = line.insertCell(0);
    var description = line.insertCell(1);
    var options = line.insertCell(2);
    date.innerHTML = dt;
    description.innerHTML = desc;
    options.innerHTML = "<button class='btn btn-danger' onclick='removeLinha(this)'>Deletar</button>";
}

function submitLine(desc) {
    var dataFormatada = new Date();
    dataFormatada = ''+ dataFormatada.getDay() + '/' + dataFormatada.getMonth() + '/' + dataFormatada.getFullYear();
    postDescription(dataFormatada, desc);
    $('#novoModal').modal('hide');
    console.log(tbodyRef);
};

function fecharModal() {
    $('#submitDescricao').click(function() {
        $('#novoModal').modal('hide');
    });
}

function removeLinha(btn) {
    var linha = btn.parentNode.parentNode;
    var desc = linha.childNodes[1].textContent;
    linha.parentNode.removeChild(linha);
    removeDescription(desc);
}
