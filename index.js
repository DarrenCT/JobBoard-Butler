let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //clear input field
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  //add elements to the output list
  for (let i = 0; i < myLeads.length; i++) {
    listItems += "<li>" + myLeads[i] + "</li>";
  }
  //render output
  ulEl.innerHTML = listItems;
}
