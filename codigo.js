function exibirDados() {
  const nome = document.getElementById("nome").value;
  const sobrenome = document.getElementById("sobrenome").value;
  const telefone = document.getElementById("telefone").value;
  const email = document.getElementById("email").value;
  const resultadoDiv = document.getElementById("resultado");

  if (nome && sobrenome && telefone && email) {
    const dados = [nome, sobrenome, telefone, email];

    resultadoDiv.innerHTML = "";

    dados.forEach((dado) => {
      const div = document.createElement("div");
      div.textContent = dado;
      resultadoDiv.appendChild(div);
    });
  } else {
    resultadoDiv.innerHTML = "";
    alert("Por favor, preencha todos os campos!");
  }
}
