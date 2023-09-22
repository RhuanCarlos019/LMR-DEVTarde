// Seleciona o elemento do tabuleiro de jogo
const board = document.getElementById("game-board");

// Seleciona o elemento da mensagem
const message = document.getElementById("message");

// Seleciona o botão de reiniciar o jogo
const resetButton = document.getElementById("reset-button");

// Inicializa o jogador atual como "X"
let currentPlayer = "X";

// Verifica se o jogo acabou ou se terá continuidade
let gameOver = false;

// Função para criar uma célula do tabuleiro
function createCell() {
    const cell = document.createElement("div");
    cell.classList.add("cell"); // Adiciona a classe "cell" à célula
    cell.addEventListener("click", handleCellClick); // Adiciona um ouvinte de evento de clique à célula
    return cell;
}

// Função para alternar entre os jogadores
function togglePlayer() {
    currentPlayer = currentPlayer === "X" ? "O" : "X"; // Alterna entre "X" e "O" como jogador atual
}

// Função para verificar o vencedor
function checkWinner() {
    const cells = Array.from(document.querySelectorAll(".cell")); // Seleciona todas as células

    const winningCombos = [ // Possíveis combinações vencedoras no jogo da velha
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (const combo of winningCombos) {
        const [a, b, c] = combo;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            return cells[a].textContent; // Retorna o jogador vencedor
        }
    }

    if (cells.every(cell => cell.textContent)) {
        return "empate"; // Retorna "empate" se todas as células estiverem preenchidas
    }

    return null; // Retorna nulo se o jogo não estiver encerrado
}

// Função para tratar o clique em uma célula do tabuleiro
function handleCellClick() {
    if (!gameOver && !this.textContent) { // Verifica se o jogo não está encerrado e a célula está vazia
        this.textContent = currentPlayer; // Preenche a célula com o símbolo do jogador atual
        const winner = checkWinner(); // Verifica se há um vencedor

        if (winner) {
            if (winner === "empate") {
                message.textContent = "Empate!"; // Exibe mensagem de empate
            } else {
                message.textContent = `Jogador ${winner} venceu!`; // Exibe mensagem de vitória
            }
            gameOver = true; // Define o jogo como encerrado
            resetButton.style.display = "block"; // Exibe o botão de reinício
        } else {
            togglePlayer(); // Alterna para o próximo jogador
            message.textContent = `É a vez do jogador ${currentPlayer}`; // Exibe a mensagem de vez do jogador
        }
    }
}

// Função para reiniciar o jogo
function resetGame() {
    const cells = Array.from(document.querySelectorAll(".cell")); // Seleciona todas as células
    cells.forEach(cell => {
        cell.textContent = ""; // Limpa o conteúdo de todas as células
    });
    currentPlayer = "X"; // Reinicia o jogador atual como "X"
    gameOver = false; // Define o jogo como não encerrado
    message.textContent = `É a vez do jogador ${currentPlayer}`; // Exibe a mensagem de vez do jogador
    resetButton.style.display = "none"; // Oculta o botão de reinício
}

// Event listeners para escolher o jogador e reiniciar o jogo
document.getElementById("choose-X").addEventListener("click", () => {
    currentPlayer = "X"; // Define o jogador atual como "X"
    message.textContent = `É a vez do jogador ${currentPlayer}`; // Exibe a mensagem de vez do jogador
});

document.getElementById("choose-O").addEventListener("click", () => {
    currentPlayer = "O"; // Define o jogador atual como "O"
    message.textContent = `É a vez do jogador ${currentPlayer}`; // Exibe a mensagem de vez do jogador
});

resetButton.addEventListener("click", resetGame); // Adiciona um ouvinte de evento ao botão de reinício

// Loop para criar as células do tabuleiro
for (let i = 0; i < 9; i++) {
    const cell = createCell(); // Cria uma célula
    board.appendChild(cell); // Adiciona a célula ao tabuleiro
}

// Exibe a mensagem inicial de vez do jogador
message.textContent = `É a vez do jogador ${currentPlayer}`;
