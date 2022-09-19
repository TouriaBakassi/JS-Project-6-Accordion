// Accordion2
let buttons = document.querySelectorAll("#Accordionheader");
let texts = document.querySelectorAll("#Accordionbody");
/*buttons.forEach((bttn) => {
  bttn.addEventListener("click", () => {
    bttn.classList.toggle("active");
  });
});*/

buttons.forEach(function (bttn) {
  bttn.addEventListener("click", function () {
    texts.forEach(function (text) {
      if (
        text !== bttn.nextElementSibling &&
        text.classList.contains("active")
      ) {
        text.classList.remove("active");
        buttons.forEach(function (bttn) {
          bttn.classList.remove("active");
        });
      }
    });
    text = bttn.nextElementSibling;
    text.classList.toggle("active");
    bttn.classList.toggle("active");
  });
});
