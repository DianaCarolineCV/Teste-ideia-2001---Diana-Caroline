const button = document.querySelector("#buttonHeader");

button.addEventListener("click", () => {
  document.querySelector(".english").classList.toggle("show");
  document.querySelector(".portuguese").classList.toggle("hide");
  let english = document.querySelector(".english");
  let p = document.querySelector("p");
  let buttonSearch = document.querySelector(".button");
  let buttonReleases = document.querySelector(".releases");
  let buttonCar = document.querySelector(".car");
  let buttonContact = document.querySelector(".contact");

  if (english.classList.contains("show")) {
    p.innerText = "Language:";
    buttonSearch.innerText = "Search Products";
    buttonReleases.innerText = "Releases";
    buttonCar.innerText = "Cart";
    buttonContact.innerText = "Contact";
  } else {
    p.innerText = "Idioma:";
    buttonSearch.innerText = "Pesquisar Produtos";
    buttonReleases.innerText = "Lançamentos";
    buttonCar.innerText = "Carinho";
    buttonContact.innerText = "Contato";
  }
});
