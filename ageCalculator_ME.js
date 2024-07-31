var displayAge = document.getElementById("display");

function user() {
  let date = new Date();
  let currentYear = date.getFullYear();
  let userDate = document.getElementById("inputt").value;
  if (userDate === "") {
    alert("Please Enter Your Year Of Birth");
    return false;
  }
  if (userDate >= currentYear){
    alert("Please Enter Correct Year of Birth")
    return false;
  }
  if (userDate < 1924){
    alert("It is not Your Year of Birth, Enter Correct Year")
    return false;
  }

  displayAge.innerHTML = `Your Are ${currentYear - userDate} Years Old`;
}

