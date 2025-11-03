// --- MODAL FUNCTIONALITY (What is Para Legal) ---

// Get the modal, the button, and the close button
var modal = document.getElementById("paralegalModal");
var modalBtn = document.getElementById("openModalBtn");
var closeSpan = document.getElementsByClassName("close-button")[0];

// Open the modal when the button is clicked 
modalBtn.onclick = function() {
  modal.style.display = "block";
}

// Close the modal when the 'x' is clicked
closeSpan.onclick = function() {
  modal.style.display = "none";
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


// --- ACCORDION FUNCTIONALITY (Professional Profile) ---

var accBtn = document.getElementById("profileAccordionBtn");
var accContent = document.getElementById("profileAccordionContent");

accBtn.onclick = function() {
    // Toggle the 'active' class on the button
    this.classList.toggle("active");
    
    // Check the current state of the content box
    if (accContent.style.maxHeight) {
        // If it's open, close it (set maxHeight to null/0)
        accContent.style.maxHeight = null;
    } else {
        // If it's closed, open it (set maxHeight to its scrollHeight)
        // We add a small buffer (e.g., 20px) to scrollHeight for smoother animation without overflow issues
        accContent.style.maxHeight = accContent.scrollHeight + "px";
    } 
}