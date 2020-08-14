function myFunction() {
    // Declare variables
    var a, i, txtValue;
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const project = document.querySelectorAll('.project_item');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < project.length; i++) {
      a = project[i].getElementsByTagName("p")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        project[i].style.display = "";
      } else {
        project[i].style.display = "none";
      }
    }
  }

  function myGmail() {
    /* Get the text field */
    const copyText = document.querySelector(".myGmail").title
    alert('Ths is my email "glqiao971102@gmail.com"')

  }

