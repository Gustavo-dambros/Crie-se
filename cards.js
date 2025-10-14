const botaoFiltro = document.querySelector(".filtro");
const filtros = document.querySelector(".filtros");

const display = document.querySelector('.titulo-lista');
const list = document.querySelector('.Lista-cursos');
const btnfiltro = document.getElementById("funnel-svgrepo-com.svg");

// Mudei a variável 'options' para pegar apenas os itens de curso,
// já que a lógica de seleção de texto é específica para eles.
const customOptions = document.querySelectorAll('li'); 


// --- LÓGICA DO PAINEL DE FILTROS PRINCIPAL (.filtros) ---

botaoFiltro.addEventListener("click", (e) => {
    e.stopPropagation(); // evita conflito com clique fora
    filtros.classList.toggle("ativo");
});

// Fechar o painel principal se clicar fora
document.addEventListener("click", (e) => {
    if (!filtros.contains(e.target) && !botaoFiltro.contains(e.target)) {
        filtros.classList.remove("ativo");
    }
});


// --- LÓGICA DE ABRIR/FECHAR A LISTA DE CURSOS E ANIMAÇÃO DA SETA ---

display.addEventListener('click', (e) => {
    e.stopPropagation(); // Impede o fechamento imediato pelo document.click
    
    // 1. Alterna a visibilidade da lista de cursos
    list.classList.toggle('hidden');
    
    // 2. Alterna a classe 'aberto' para girar a seta via CSS
    display.classList.toggle('aberto'); 
});


// --- LÓGICA DE SELEÇÃO DE CURSO ---

customOptions.forEach(option => {
    option.addEventListener('click', () => {
        
        const selectedValue = option.getAttribute('data-value');
        console.log("Valor selecionado:", selectedValue);
        
        // 1. Esconde a lista e reseta a seta
        list.classList.add('hidden');
        display.classList.remove('aberto'); 
        
        // 2. Lógica de cor do botão de filtro (Mantida)
        if (selectedValue) {
      // troca o conteúdo interno (a imagem)
      btnfiltro.innerHTML =  ` <img src="funnel-svgrepo-com-blue.svg" alt="Filtro">`;
    }

    if (selectedValue === "Remover") {
      // volta a imagem original
      btnfiltro.innerHTML = ` <img src="funnel-svgrepo-com.svg" alt="Filtro">`;
    }
    });
});


// --- LÓGICA DE FECHAMENTO AO CLICAR FORA (CURSOS) ---
// Note que esta função agora remove a classe 'aberto' para resetar a seta!

document.addEventListener('click', (event) => {
    // Checa se o clique não foi no display nem na própria lista
    if (!display.contains(event.target) && !list.contains(event.target)) {
        list.classList.add('hidden');
        
        // Remove a classe 'aberto' para desvirar a seta
        display.classList.remove('aberto'); 
    }
});

// --- LÓGICA PARA EXPANDIR OS CARDS ---
const overlay = document.querySelector('.overlay');
const cards = document.querySelectorAll('.card');

// Adiciona o evento de clique em cada card
cards.forEach(card => {
    card.addEventListener('click', () => {
        // Se o card já estiver expandido, recolhe ele
        if (card.classList.contains('expanded')) {
            card.classList.remove('expanded');
            overlay.classList.remove('active');
        } else {
            // Remove a classe expanded de qualquer outro card
            cards.forEach(c => c.classList.remove('expanded'));
            // Expande o card clicado
            card.classList.add('expanded');
            overlay.classList.add('active');
        }
    });
});

// Fecha o card expandido ao clicar no overlay
overlay.addEventListener('click', () => {
    const expandedCard = document.querySelector('.card.expanded');
    if (expandedCard) {
        expandedCard.classList.remove('expanded');
        overlay.classList.remove('active');
    }
});