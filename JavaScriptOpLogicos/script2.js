function operacao() {
    let numero1 = parseInt(document.getElementById("nValor1").value);
    let numero2 = parseInt(document.getElementById("nValor2").value);
    let resultado;

    operacao = prompt("Digite a Operação Desejada: +, -, *, /");
    numero1 = parseFloat(prompt("Digite um número"));
    numero2 = parseFloat(prompt("Digite outro número"));

    switch (operacao) {
        case "+":
            resultado = numero1 + numero2;
            alert(resultado);
            break;
        case "-":
            resultado = numero1 - numero2;
            alert(resultado);
            break;
        case "*":
            resultado = numero1 * numero2;
            alert(resultado);
            break;
        case "/":
            if (numero2!=0) {
                resultado = numero1 / numero2;
            } else {
                alert("Operação inválida");
            }
            break;
        default:
            alert("Escolha uma Operação Válida");
            break
    }
}
