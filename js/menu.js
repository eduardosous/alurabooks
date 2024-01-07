const menu = document.getElementById("opcoes-menu");

menu.addEventListener("click", (e) => {
  const show = document.getElementById("lista-menu");
  if (e.target.checked) {
    show.style.display = "block";
  } else {
    show.style.display = "none";
  }
});
