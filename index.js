// Function to show the popup and hide it after 3 seconds
function showPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
  
    // Hide the popup after 3 seconds
    setTimeout(function() {
      popup.style.display = 'none';
    }, 2000);
  }
  