let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
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

tabBtn.addEventListener("click", function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
})

deleteBtn.addEventListener("dblclick", function(){
  //clear stoage
  localStorage.clear()
  myLeads = []
  render(myLeads)
})

function addLead() {
  // Check if the input value starts with "http://" or "https://"
  let inputValue = inputEl.value
  if (!inputValue.startsWith("http://") && !inputValue.startsWith("https://")) {
    // Add "http://" prefix if missing
    inputValue = "http://" + inputValue
  }

  myLeads.push(inputValue);
  // Clear input field
  inputEl.value = ""
  // Save myLeads into local storage, by converting the array to a string
  localStorage.setItem("myLeads", JSON.stringify(myLeads))
  render(myLeads)
}

inputBtn.addEventListener("click", addLead);

//Enter key can also trigger addLead function
inputEl.addEventListener("keydown", function (event) {
  if (event.key === "Enter") { 
    addLead();
  }
});


