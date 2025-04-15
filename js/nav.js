function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }

  // Get all the links inside the navigation
  var links = x.getElementsByTagName("a");

  // Get the current page URL
  var currentUrl = window.location.href;

  // Loop through each link
  for (var i = 0; i < links.length; i++) {
    // Remove the active class from all links
    links[i].classList.remove("active");

    // Check if the link's href matches the current page URL
    if (currentUrl.includes(links[i].href)) {
      // Add the active class to the current link
      links[i].classList.add("active");
    }
  }
}

// Execute the function on page load to set the active class correctly
window.onload = myFunction;
