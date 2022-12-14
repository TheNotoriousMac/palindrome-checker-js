const txtInput = document.querySelector(".inputs input"),
  checkBtn = document.querySelector(".inputs button"),
  infoTxt = document.querySelector(".info-txt");
let filterInput;

checkBtn.addEventListener("click", () => {
  //split user input character, reversing them, and joining them in a single world
  let reverseInput = filterInput.split("").reverse().join("");
  infoTxt.style.display = "block";
  if (filterInput != reverseInput) {
    return (infoTxt.innerHTML = `No, <span>'${txtInput.value}'</span> is not a palindrome!`);
  }
  return (infoTxt.innerHTML = `Yes, <span>'${txtInput.value}'</span> is a palindrome!`);
});

txtInput.addEventListener("keyup", () => {
  //removing spaces and all special characters from entered value
  filterInput = txtInput.value.replace(/[^A-Z0-9]/gi, "");
  if (filterInput) {
    return checkBtn.classList.add("active");
  }
  checkBtn.classList.remove("active");
});
