

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const content = document.querySelector('.content');
    sidebar.classList.toggle('open');
    content.classList.toggle('open');
}
// Função para adicionar produto em uma lista

function addProduct() {
    const container = document.getElementById('produtos');
    const produtoSelect = document.querySelector('select[name="produto[]"]');
    const quantidadeInput = document.querySelector('input[name="quantidade[]"]');
    const produto = produtoSelect.value;
    const quantidade = quantidadeInput.value;

    if (produto !== 'vazio' && quantidade) {
        const productItem = document.createElement('tr');
        productItem.className = 'produtos-selecionados';

        productItem.innerHTML = `
            <td>${produto}</td>
            <td>${quantidade}</td>
            <td><a type="button" class="remove-button" onclick="removeProduct(this)">Remover</a></td>
        `;

        container.appendChild(productItem);
        produtoSelect.value = 'vazio';
        quantidadeInput.value = '';

        document.getElementById('table-header').style.display = 'table-header-group';
    }
}

// Função para remover produto da lista

function removeProduct(button) {
    const row = button.parentElement.parentElement;
    row.remove();

    if (document.getElementById('produtos').children.length === 0) {
        document.getElementById('table-header').style.display = 'none';
    }
}



//-------------------------------------------------------------------//



// Função para buscar produtos

function buscaFornecedor() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("buscaInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("fornecedor");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}


//-------------------------------------------------------------------//


// Função para buscar produtos

function buscaProduto() {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("buscaInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("produto");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}


//-------------------------------------------------------------------//


// Pegue o modal
var modal = document.getElementById("myModal");

// Pegue o botão que abre o modal
var btn = document.getElementById("openModalBtn");

// Pegue o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Quando o usuário clicar no botão, abre o modal
btn.onclick = function() {
    modal.style.display = "block";
}

// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
    modal.style.display = "none";
}

// Quando o usuário clicar em qualquer lugar fora do modal, fecha o modal
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


//-------------------------------------------------------------------//


 // Função para calcular o valor total
 function calcularValorTotal() {
    let tabela = document.querySelector('.tabela-modal tbody');
    let linhas = tabela.querySelectorAll('tr');
    let total = 0;

    linhas.forEach(linha => {
        let valorTotal = linha.cells[5].innerText.replace('R$', '').replace('.', '').replace(',', '.');
        total += parseFloat(valorTotal);
    });

    document.getElementById('valor-total').innerText = 'R$ ' + total.toFixed(2).replace('.', ',');
}

// Calcular o valor total ao carregar a página
document.addEventListener('DOMContentLoaded', calcularValorTotal);