"use strict";
const botaoSelecao = document.querySelectorAll("#cores li");
const corTroca = document.querySelector("#imagem");

// console.log(botaoSelecao);
// console.log(corTroca);

botaoSelecao.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    // console.log(e);
    botaoSelecao.forEach((btn) => {
      btn.querySelector(".cor").classList.remove("selecao");
    });
    const botao = e.target;
    // console.log(`botao: ${botao}`)
    const id = botao.getAttribute("id");
    // console.log(id);
    botao.querySelector(".cor").classList.add("selecao");
    corTroca.classList.add("troca");
    corTroca.setAttribute("src",`img/iphone_${id}.jpg`);
    setTimeout(() => {
      corTroca.classList.toggle("troca");
    },200)
  });
});
