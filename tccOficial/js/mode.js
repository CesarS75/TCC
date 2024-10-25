// Verifica se o tema armazenado no localStorage é escuro e aplica ao body
function applyTheme(theme) {
  if (theme === "dark") {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }
}

// Carrega o tema do localStorage ao iniciar
const storedTheme = window.localStorage.getItem("theme") || "light"; // Define "light" como padrão se não houver tema
applyTheme(storedTheme);

const toggle = document.getElementById("toggle");

// Event listener para quando o botão de alterar o tema for clicado
toggle.addEventListener("click", () => {
  // Alterna a classe 'dark' no body
  const isDark = document.body.classList.toggle("dark");

  // Atualiza o tema no localStorage
  window.localStorage.setItem("theme", isDark ? "dark" : "light");
});