let amigos = [];

// Função para adicionar amigos sem apertar necessariamente o botão com o mouse
document.getElementById("amigo").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
      event.preventDefault();
      adicionarAmigo();
  }
});

// Função para adicionar amigos
function adicionarAmigo() {
  const inputNome = document.getElementById('amigo');
  const nomes = inputNome.value.trim();
  if (nomes === "") {
    alert("Por favor, insira pelo menos um nome!");
    return;
  }

  // Testar para ver se não tem amigos repetidos a lista
  const nomesR = amigos.some(amigo => amigo.toLowerCase() === nomes.toLowerCase());
  if (nomesR) {
  alert("Este nome já foi adicionado!");
  inputNome.value = "";
  return;
  }

  amigos.push(nomes);
  atualizarLista();
  inputNome.value = "";

}

// Função que atualiza a lista conforme os amigos são adicionados
function atualizarLista() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach((amigo, index) => {
    const item = document.createElement('li');
    item.textContent = `${index + 1}. ${amigo}`;
    lista.appendChild(item);
  });
}

// Função para sortear os amigos
function sortearAmigo() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigo para sortear.");
    return;
  }

  const index = Math.floor(Math.random() * amigos.length);
  const sorteado = amigos[index];
  const resultadoLista = document.getElementById('resultado');
  resultadoLista.innerHTML = ''; 
  const item = document.createElement('li');
  item.textContent = `O amigo secreto sorteado é: ${sorteado}`;
  item.style.fontWeight = 'bold';
  item.style.fontSize = '20px';
  resultadoLista.appendChild(item);
}
