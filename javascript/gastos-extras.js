const produtosExtra = document.getElementById('produtos_extra');
const adicionarExtra = document.getElementById('adicionar_extra');
const removerExtra = document.getElementById('remover_extra');
const totalExtra = document.getElementById('total_extra');
const resultadoFinalExtra = document.getElementById('result_final_extra');


// Adicionar linha
adicionarExtra.addEventListener('click', function() {
    produtosExtra.insertAdjacentHTML('beforeend', `
        <tr>
            <td><input class="product" type="text" name="product" /></td>
            <td><input class="bought_product" type="number"
                name="bought_product" min="0" step="0.01" value="0" /></td>
        </tr>
    `);
});

// Remover linha
removerExtra.addEventListener('click', function() {
    if (produtosExtra.children.length > 1) {
        produtosExtra.lastElementChild.remove();
    }
});

// Somar gastos extras
function somarGastosExtras() {
    let soma = 0;

    produtosExtra.querySelectorAll('.bought_product').forEach(function(input) {
        soma += Math.max(0, Number(input.value) || 0);
    });

    resultadoFinalExtra.textContent = soma.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
}

totalExtra.addEventListener('click', somarGastosExtras);
