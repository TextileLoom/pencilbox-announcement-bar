// Function to load CSS file dynamically
function loadCSS(url) {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = url;
  document.head.appendChild(link);
}

// Load the CSS file from UNPKG
loadCSS("https://unpkg.com/pencilbox-announcement-bar@^1.0.0/pencilbox-announcement-bar.css");

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
    <div class="close-btn" onclick="document.querySelector('.pencilbox-announcement-bar').classList.remove('show')">
      <i class="fas fa-times"></i>
    </div>
  `,
  template2: `
    <span>placeholder text</span>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <button class="announcement-bar_btn glowring">placeholder text</button>
      </a>
       <div class="close-btn" onclick="document.querySelector('.pencilbox-announcement-bar').classList.remove('show')">
      <i class="fas fa-times"></i>
    </div>
  `,
  template3: `
    <span>placeholder text</span>
      <a href="#" target="_blank" rel="noopener noreferrer">
        <button class="announcement-bar_btn glowring">placeholder text</button>
      </a>
       <div class="close-btn" onclick="document.querySelector('.pencilbox-announcement-bar').classList.remove('show')">
      <i class="fas fa-times"></i>
    </div>
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


window.onload = function() {
  setTimeout(function() {
    showAnnouncement('template1');  
  }, 1000);
};