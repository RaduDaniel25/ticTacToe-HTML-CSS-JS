"use strict";
const p1 = document.querySelector(".b1");
const p2 = document.querySelector(".b2");
const p3 = document.querySelector(".b3");
const p4 = document.querySelector(".b4");
const p5 = document.querySelector(".b5");
const p6 = document.querySelector(".b6");
const p7 = document.querySelector(".b7");
const p8 = document.querySelector(".b8");
const p9 = document.querySelector(".b9");
const pvpbtn = document.querySelector(".btn-pvp");
const pvcbtn = document.querySelector(".btn-pvc");

const bi = document.querySelector(".bi");
let activeplayer = "x";
let active;

const pvp = function () {
  active = 1;

  [p1, p2, p3, p4, p5, p6, p7, p8, p9].forEach((item) => {
    item.addEventListener("click", function () {
      if (active == 1) {
        if (item.classList.contains("empty")) {
          item.textContent = activeplayer;
          item.classList.remove("empty");
          item.classList.add("disable");
          check();

          switchPlayer();
        }
      }
    });
  });
};

const switchPlayer = function () {
  activeplayer = activeplayer === "o" ? "x" : "o";
};

const check = function () {
  if (
    p1.textContent === "o" &&
    p2.textContent === "o" &&
    p3.textContent === "o"
  ) {
    gameover("o");
    openModal();
  }
  if (
    p1.textContent === "o" &&
    p5.textContent === "o" &&
    p9.textContent === "o"
  ) {
    gameover("o");
    openModal();
  }
  if (
    p1.textContent === "o" &&
    p4.textContent === "o" &&
    p7.textContent === "o"
  ) {
    gameover("o");
    openModal();
  }
  if (
    p2.textContent === "o" &&
    p5.textContent === "o" &&
    p8.textContent === "o"
  ) {
    gameover("o");
    openModal();
  }
  if (
    p3.textContent === "o" &&
    p5.textContent === "o" &&
    p7.textContent === "o"
  ) {
    gameover("o");
    openModal();
  }
  if (
    p3.textContent === "o" &&
    p6.textContent === "o" &&
    p9.textContent === "o"
  ) {
    gameover("o");
    openModal();
  }
  if (
    p4.textContent === "o" &&
    p5.textContent === "o" &&
    p6.textContent === "o"
  ) {
    gameover("o");
    openModal();
  }
  if (
    p7.textContent === "o" &&
    p8.textContent === "o" &&
    p9.textContent === "o"
  ) {
    gameover("o");
    openModal();
  }

  if (
    p1.textContent === "x" &&
    p2.textContent === "x" &&
    p3.textContent === "x"
  ) {
    gameover("x");
    openModal();
  }
  if (
    p1.textContent === "x" &&
    p5.textContent === "x" &&
    p9.textContent === "x"
  ) {
    gameover("x");
    openModal();
  }
  if (
    p1.textContent === "x" &&
    p4.textContent === "x" &&
    p7.textContent === "x"
  ) {
    gameover("x");
    openModal();
  }
  if (
    p2.textContent === "x" &&
    p5.textContent === "x" &&
    p8.textContent === "x"
  ) {
    gameover("x");
    openModal();
  }
  if (
    p3.textContent === "x" &&
    p5.textContent === "x" &&
    p7.textContent === "x"
  ) {
    gameover("x");
    openModal();
  }
  if (
    p3.textContent === "x" &&
    p6.textContent === "x" &&
    p9.textContent === "x"
  ) {
    gameover("x");
    openModal();
  }
  if (
    p4.textContent === "x" &&
    p5.textContent === "x" &&
    p6.textContent === "x"
  ) {
    gameover("x");
    openModal();
  }
  if (
    p7.textContent === "x" &&
    p8.textContent === "x" &&
    p9.textContent === "x"
  ) {
    gameover("x");
    openModal();
  } else if (
    p1.classList.contains("disable") &&
    p2.classList.contains("disable") &&
    p3.classList.contains("disable") &&
    p4.classList.contains("disable") &&
    p5.classList.contains("disable") &&
    p6.classList.contains("disable") &&
    p7.classList.contains("disable") &&
    p8.classList.contains("disable") &&
    p9.classList.contains("disable")
  )
    openModal();
};

const reset = document.querySelector(".btn-reset");

reset.addEventListener("click", function () {
  [p1, p2, p3, p4, p5, p6, p7, p8, p9].forEach((item) => {
    item.classList.add("empty");
    item.classList.remove("disable");
    item.textContent = "";
    activeplayer = "x";
    winner.textContent = "Draw";
    // active = 0;
  });
});

const pvc = function () {
  active = 2;
  [p1, p2, p3, p4, p5, p6, p7, p8, p9].forEach((item) => {
    item.addEventListener("click", function () {
      if (active == 2) {
        if (item.classList.contains("empty")) {
          item.textContent = activeplayer;
          item.classList.remove("empty");
          item.classList.add("disable");
          check();
          if (
            p1.classList.contains("empty") ||
            p2.classList.contains("empty") ||
            p3.classList.contains("empty") ||
            p4.classList.contains("empty") ||
            p5.classList.contains("empty") ||
            p6.classList.contains("empty") ||
            p7.classList.contains("empty") ||
            p8.classList.contains("empty") ||
            p9.classList.contains("empty")
          )
            switchtopc();
        }
      }
    });
  });
};

const switchtopc = () => {
  const random = Math.trunc(Math.random() * 9 + 1);
  console.log(random);
  console.log(document.querySelector(`.b${random}`).classList);
  const randomitem = document.querySelector(`.b${random}`);
  if (randomitem.classList.contains("empty")) {
    randomitem.textContent = "o";
    randomitem.classList.remove("empty");
    randomitem.classList.add("disable");
  } else {
    switchtopc();
  }
  check();
};

pvpbtn.addEventListener("click", pvp);
pvcbtn.addEventListener("click", pvc);

// adaugare functie active pe btn pvc
const gameover = function (active) {
  winner.innerHTML = `The winner is: ${active}`;
  console.log(winner.textContent);

  [p1, p2, p3, p4, p5, p6, p7, p8, p9].forEach((item) => {
    item.classList.add("disable");
    item.classList.remove("empty");
  });
  active = 0;
  return true;
};

const winner = document.querySelector(".the-winner");

const modal = document.querySelector(".container-modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".cls-btn");
// const btnsOpenModal = document.querySelectorAll(".show-modal");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});
