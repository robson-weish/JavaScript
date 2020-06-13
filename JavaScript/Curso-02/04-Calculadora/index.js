var etanol,gasoina;

function calcular(){
    etanol = parseFloat(frmFlex.txtEtanol.value.replace(",","."));
    gasolina = parseFloat(frmFlex.txtGasolina.value.replace(",","."));

    // Aqui embaixo e possivel ver o uso do DOM 

    if (etanol < 0.7 * gasolina) {
        document.getElementById("status").src="imagens/etanol.png"
    } else {
        document.getElementById("status").src="imagens/gasolina.png"
    }
}

function resetar(){
    document.getElementById("status").src="imagens/neutro.png"
}