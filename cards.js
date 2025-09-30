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
