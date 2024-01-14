const main = document.querySelector(".name");
const number = document.querySelector(".number");
const save = document.querySelector(".save");
const cards = document.querySelector(".cards");
const formName = document.querySelector(".form-name");
const formNumber = document.querySelector(".form-number");
const loading = document.querySelector(".loading")

main.addEventListener("click", () => {
  formName.style.transition = "1s";
  formName.style.top = "60px";
  formName.style.fontSize = "15px";
});
number.addEventListener("click", () => {
  formNumber.style.transition = "1s";
  formNumber.style.top = "130px";
  formNumber.style.fontSize = "15px";
});

function add() {
    if (main.value === "" && number.value === "") {
        alert("Err")
     } else {
        loading.innerHTML = `<img src="./img/load.svg" alt="img"/>`
       setTimeout(() => {
        loading.innerHTML = ""
        cards.innerHTML += `<div class="card">
        <img src="./img/card2.png" width="400" alt="img">
        
        <h4 class="name-text">${main.value}</h4>
        <h4 class="name-number">${number.value
          .replace(/(.{4})/g, "$1 - ")
          .slice(0, -2)}</h4>
          <h2 class="card-name">Name</h2>
          <div class="valid">
          <h2>Valid Till</h2>
          <h3>05/34</h3>
              </div>
          ${
            number.value[0] === "5" ? 
            `<img src="./img/Visa_Inc._logo.svg.webp" width="100" alt="img" class="master" />`
            : 
            `<img src="./img/MasterCard_Logo.svg.png" width="100" alt="img" class="master" />`
            
          }
          </div>`;
        main.value = "";
        number.value = "";
       }, 2000)
     }
}

save.addEventListener("click", () => add());
number.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        add()
    }
})