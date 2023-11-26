let div_slider = document.getElementsByClassName("comment1");

console.log(div_slider);

let etape = 0;

let nb_div = div_slider.length;

let precedent = document.querySelector(
  ".carousel__navigation_button_precedent"
);
let suivant = document.querySelector(".carousel__navigation_button_suivant");

function enlever_activeDiv() {
  for (let i = 0; i < nb_div; i++) {
    div_slider[i].classList.remove("prev");
    div_slider[i].classList.remove("next");
    div_slider[i].classList.remove("active");
  }
}

suivant.addEventListener("click", function () {
  etape++;
  if (etape >= nb_div) {
    enlever_activeDiv();
    etape = 0;
    div_slider[etape].classList.add("active");
    div_slider[etape + 1].classList.add("next");
    div_slider[nb_div].classList.add("prev");
  } else {
    enlever_activeDiv();
    div_slider[etape].classList.add("active");

    if (etape + 1 >= nb_div) {
      div_slider[0].classList.add("next");
    } else {
      div_slider[etape + 1].classList.remove("prev");
      div_slider[etape + 1].classList.add("next");
    }
    div_slider[etape - 1].classList.add("prev");
  }
});

precedent.addEventListener("click", function () {
  etape--;
  if (etape <= 0) {
    enlever_activeDiv();
    etape = nb_div-1;
    div_slider[etape].classList.add("active");
    div_slider[0].classList.add("next");
    div_slider[etape-1].classList.add("prev");
  } else {
    enlever_activeDiv();
    div_slider[etape].classList.add("active");

    if (etape + 1 >= nb_div) {
      div_slider[0].classList.add("next");
    } else {
      div_slider[etape + 1].classList.remove("prev");
      div_slider[etape + 1].classList.add("next");
    }
    div_slider[etape - 1].classList.add("prev");
  }
});
