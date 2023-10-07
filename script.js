function calcular(event){
    if (event.key === "Enter"){
	var precoCompra = document.getElementById("precoCompra");
	var porcentagem = document.getElementById("porcentagem");
	var resultado = document.getElementById("resultado");
	var precoVenda = parseFloat(precoCompra.value) * (parseFloat(porcentagem.value)/100 + 1);
	resultado.innerHTML = "Preço de Venda: <b>" + precoVenda + ".</b>";
	console.log(precoVenda);
	// inserçao na tabela do historico
	var historico = document.getElementById("historico");
	var novoRegistro = historico.insertRow();
	var cellPrecoCompra = novoRegistro.insertCell(0);
	cellPrecoCompra.innerHTML = precoCompra.value;
	var cellPorcentagem = novoRegistro.insertCell(1);
	cellPorcentagem.innerHTML = porcentagem.value;
	var cellPrecoVenda = novoRegistro.insertCell(2);
	cellPrecoVenda.innerHTML = precoVenda;
	// limpar input
	precoCompra.value = "";
    }
}
