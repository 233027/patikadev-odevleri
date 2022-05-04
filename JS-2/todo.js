const newInput = document.querySelector("#task");
const button = document.querySelector(".button");
const list = document.querySelector("ul");
let itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];


const data = JSON.parse(localStorage.getItem("items"));
for (let i = 0; i < list.children.length; i++) {
  list.children[i].innerHTML += `<button style="margin-right: 20px; margin-top:15px"class="close">&times</button></li>`;
}
const liMaker = (index) => {
  if (newInput.value != "") {
    localStorage.setItem("items", itemsArray);
    list.innerHTML += `<li>${newInput.value}<button  id=${index} style = "margin-right: 20px; margin-top:15px" class="close">&times</button></li>`;
    let toastBasarili = document.querySelector(".success");
    let toastAlertBasarili = new bootstrap.Toast(toastBasarili);
    toastAlertBasarili.show();
    itemsArray.push(newInput.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    newInput.value = "";
  } else if (newInput.value == "") {
    let toastBasarisiz = document.querySelector(".error");
    let toastAlertBasarisiz = new bootstrap.Toast(toastBasarisiz);
    toastAlertBasarisiz.show();
  }
};
data.forEach((item, index) => {
  list.innerHTML += `<li>${item}<button  id=${index} style = "margin-right: 20px; margin-top:15px" class="close">&times</button></li>`;
});
list.addEventListener("click", function (e, index) {
  if (e.target.className == "" || e.target.className == "checked") {
    e.target.classList.toggle("checked");
    itemsArray.push(newInput.va);
  } else {
    e.target.parentElement.remove();
    data.splice(e.target.id, 1);
    localStorage.setItem("items", JSON.stringify(data));
  }
});
