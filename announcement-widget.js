// announcement-widget.js

// Templates stored as strings
const templates = {
  template1: `
    <span>🎉️ BIG NEWS: Textile releases Pencilbox Chrome extension!!</span>
    <div class="two-buttons">
      <a href="https://vimeo.com/845300600" target="_blank" rel="noopener noreferrer">
        <button class="announcement-bar_btn gradient-blob instagram"><span class="gradient"></span>Watch Video</button>
      </a>
      <a href="https://chromewebstore.google.com/detail/pencilbox-redirector/jnljfmoabjhiaifnkoflbakodmgbpfll?hl=en-US&utm_source=ext_sidebar" target="_blank" rel="noopener noreferrer">
        <button class="announcement-bar_btn glowring">Get Extension</button>
      </a>
    </div>
  `,
  template2: `
    <span>T2_Big news! We are launching a new feature next week!</span>
      <a href="https://chromewebstore.google.com/detail/pencilbox-redirector/jnljfmoabjhiaifnkoflbakodmgbpfll?hl=en-US&utm_source=ext_sidebar" target="_blank" rel="noopener noreferrer">
        <button class="announcement-bar_btn glowring">Get Extension</button>
      </a>
  `,
  template3: `
    <span>T3_Holiday sale! 20% off on all items this weekend!</span>
      <a href="https://chromewebstore.google.com/detail/pencilbox-redirector/jnljfmoabjhiaifnkoflbakodmgbpfll?hl=en-US&utm_source=ext_sidebar" target="_blank" rel="noopener noreferrer">
        <button class="announcement-bar_btn glowring">Get Extension</button>
      </a>
  `
};

// Function to show the selected template
function showAnnouncement(templateKey) {
  var announcementBar = document.querySelector('.pencilbox-announcement-bar');
  
  if (announcementBar) {
    // Insert the chosen template's HTML
    announcementBar.innerHTML = templates[templateKey];

    // Add animation class to show the bar
    setTimeout(function() {
      announcementBar.classList.add('show');
    }, 100);
  }
}

// Check if the announcement widget should be shown
window.onload = function() {
  setTimeout(function() {
    showAnnouncement('template1');  // Show template 1 as the default
  }, 1000);
};