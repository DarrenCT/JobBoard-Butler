let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
//turn leads from string back to array to render
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
}

function render(leads) {
  let listItems = ""
  //Add elements to the output list
  for (let i = 0; i < leads.length; i++) {
      listItems += `
          <li>
              <a target='_blank' href='${leads[i]}'>
                  ${leads[i]}
              </a>
          </li>
      `
  }
  //Render output
  ulEl.innerHTML = listItems  
}

deleteBtn.addEventListener("dblclick", function(){
  //clear stoage
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

inputBtn.addEventListener("click", function () {
  // // Check if the input value starts with "http://" or "https://"
  // let inputValue = inputEl.value
  // if (!inputValue.startsWith("http://") && !inputValue.startsWith("https://")) {
  //   // Add "http://" prefix if missing
  //   inputValue = "http://" + inputValue
  // }

  myLeads.push(inputEl.value)
  // Clear input field
  inputEl.value = ""
  //save myLeads into local storage, by convertion array to string
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
})


