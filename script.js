document.addEventListener("DOMContentLoaded", function () {
  const professions = ["I am Computer Science Student", "I am  Frontend Web Developer "];
  let index = 0;
  let charIndex = 0;
  const professionElement = document.getElementById("profession");

  function typeWriter() {
    if (charIndex < professions[index].length) {
      professionElement.textContent += professions[index].charAt(charIndex);
      charIndex++;
      setTimeout(typeWriter, 100);
    } else {
      setTimeout(() => {
        charIndex = 0;
        professionElement.textContent = "";
        index = (index + 1) % professions.length;
        typeWriter();
      }, 2000);
    }
  }

  typeWriter();
});
