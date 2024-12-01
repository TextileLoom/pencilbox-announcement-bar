// announcement-widget.js

// Inject the CSS dynamically into the document
(function() {
  var link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = 'https://cdn.jsdelivr.net/gh/TextileLoom/pencilbox-announcement-bar/announcement-widget.css';
  document.head.appendChild(link);
})();

// Function to show the announcement widget
function showAnnouncement() {
  // Find the placeholder div where the content will be injected
  var announcementBar = document.querySelector('.pencilbox-announcement-bar');
  
  if (announcementBar) {
    // Add content to the announcement bar
    announcementBar.innerHTML = `
      <span>Don't miss our special sale event! Save up to 50% on top products!</span>
      <button class="close-button">Close</button>
    `;

    // Add animation class to show the bar
    setTimeout(function() {
      announcementBar.classList.add('show');
    }, 100);

    // Close button functionality
    announcementBar.querySelector('.close-button').addEventListener('click', function() {
      announcementBar.classList.remove('show');
    });
  }
}

// Check if the announcement widget should be shown
window.onload = function() {
  setTimeout(showAnnouncement, 1000); // Delay for demo purposes
};




  