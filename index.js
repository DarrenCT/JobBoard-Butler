let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


inputBtn.addEventListener("click", function () {
  // Check if the input value starts with "http://" or "https://"
  let inputValue = inputEl.value
  if (!inputValue.startsWith("http://") && !inputValue.startsWith("https://")) {
    // Add "http://" prefix if missing
    inputValue = "http://" + inputValue
  }

  myLeads.push(inputValue)
  // Clear input field
  inputEl.value = ""
  //save myLeads into local storage
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  renderLeads()
  console.log(localStorage.getItem("myLeads"))
});

function renderLeads() {
  let listItems = ""
  //Add elements to the output list
  for (let i = 0; i < myLeads.length; i++) {
      listItems += `
          <li>
              <a target='_blank' href='${myLeads[i]}'>
                  ${myLeads[i]}
              </a>
          </li>
      `
  }
  //Render output
  ulEl.innerHTML = listItems  
}
