const botaoFiltro = document.querySelector(".filtro");
const filtros = document.querySelector(".filtros");

botaoFiltro.addEventListener("click", (e) => {
  e.stopPropagation(); // evita conflito com clique fora
  filtros.classList.toggle("ativo");
});

// fecha se clicar fora
document.addEventListener("click", (e) => {
  if (!filtros.contains(e.target) && !botaoFiltro.contains(e.target)) {
    filtros.classList.remove("ativo");
  }
});



const display = document.querySelector('.titulo-lista');
const list = document.querySelector('.Lista-cursos');
const options = document.querySelectorAll('li');
const btnfiltro = document.querySelector('.filtro')




display.addEventListener('click', () => {
    list.classList.toggle('hidden');
});

// 2. Lógica de seleção
options.forEach(option => {
    option.addEventListener('click', () => {
        // Atualiza o texto do "botão"
       
        
        // Esconde a lista novamente
        list.classList.add('hidden');
        
        // **IMPORTANTE**: Aqui você fará a lógica de filtro real
        const selectedValue = option.getAttribute('data-value');
        console.log("Valor selecionado:", selectedValue);
        // Ex: applyFilter(selectedValue);
        // 
        if (selectedValue){
  btnfiltro.style.backgroundColor='#004369ff';
}
if (selectedValue=="Remover") {
  btnfiltro.style.backgroundColor='#ffffff'
}
    });
});

// 3. Fechar a lista se o usuário clicar fora dela (Melhoria de usabilidade)
document.addEventListener('click', (event) => {
    if (!display.contains(event.target) && !list.contains(event.target)) {
        list.classList.add('hidden');
    }
});

