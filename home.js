function runFunk1() {
    const element = document.getElementById('submit');
    if (element.innerHTML == "Submit") {
        element.innerHTML = "Done!";
        document.getElementById('testing').innerHTML = "HAHA BYE!";
    } else {
        element.innerHTML = "Submit";
        document.getElementById('testing').innerHTML = "CYB-DEC";
    }
    return false;
}

function runFunk2() {
    const element = document.getElementById('clear');
    if (element.innerHTML == "Clear") {
        element.innerHTML = "Bhag!";
        document.getElementById('testing2').innerHTML = "OK!";
    } else {
        element.innerHTML = "Clear";
        document.getElementById('testing2').innerHTML = "CYB-DEC";
    }
    return false;
}
function hex(input) {
    var value;
    // value = computation on input
    return value;
}



// dropdown list function

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
  
}

  function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn1')) {
      var dropdowns = document.getElementsByClassName("dropdown-content1");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show1')) {
          openDropdown.classList.remove('show1');
        }
      }
    }
    
  }