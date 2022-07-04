const [input1, input2] = document.querySelectorAll("input");
console.log(input1, input2);
/* const Inputs = document.querySelectorAll('input') */
/* console.log(Inputs) */
const img = document.querySelector("img");

img.classList.add("photo");

function handleChange() {
  /*   let [input1, input2] = Inputs */
  if (input1.value && input2.value.length >= 6) {
    img.classList.remove("photo");
    img.classList.add("show");
    img.setAttribute("alt", "Bel'vet");
    img.setAttribute(
      "src",
      "https://s2.glbig.com/wGa23wI_jh8jQQPeceMkXn0PfP0=/1200x/smart/filters:cover():strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2022/m/W/imIDXlRliBXt3SgTuIsg/belveth.jpg"
    );
  } else {
    img.classList.remove("show");
    img.classList.add("photo");
    img.removeAttribute("src");
  }
}

/* Inputs.forEach(function(input){
    input.addEventListener('input', handleChange)
}) */

/*  */
input1.addEventListener("input", handleChange);
input2.addEventListener("input", handleChange);
