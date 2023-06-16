function contratar() {
    let nome = document.getElementById("nome").value;
    let cnpj = document.getElementById("cnpj").value;
    let instagram = document.getElementById("instagram").value;
    let email = document.getElementById("email").value;
    let cep = document.getElementById("cep").value;
  
    if (nome.length == 0) {
      alert("Digite seu nome");
    } else if (cnpj.length == 0) {
      alert("Digite seu CNPJ");
    } else if (instagram.length == 0) {
      alert("Insira o Instagram do local do evento");
    } else if (email.length == 0) {
      alert("Insira seu e-mail");
    } else if (cep.length == 0) {
      alert("Insira seu CEP");
    } else {
    window.location.href = "Agradecimento.html";
    alert('Sucesso, entraremos em contato!')
    }
  }
  