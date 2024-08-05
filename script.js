//your JS code here. If required.
// Function to set a cookie
function setCookie(name, value, days) {
  const expires = new Date(Date.now() + days * 864e5).toUTCString();
  document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}

// Function to get a cookie value
function getCookie(name) {
  const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? decodeURIComponent(match[2]) : null;
}

// Function to apply the saved preferences
function applyPreferences() {
  const fontsize = getCookie('fontsize');
  const fontcolor = getCookie('fontcolor');

  if (fontsize) {
    document.documentElement.style.setProperty('--fontsize', `${fontsize}px`);
    document.getElementById('fontsize').value = fontsize;
  }

  if (fontcolor) {
    document.documentElement.style.setProperty('--fontcolor', fontcolor);
    document.getElementById('fontcolor').value = fontcolor;
  }
}

// Function to save preferences when the form is submitted
function savePreferences(event) {
  event.preventDefault();
  const fontsize = document.getElementById('fontsize').value;
  const fontcolor = document.getElementById('fontcolor').value;
  
  setCookie('fontsize', fontsize, 7);
  setCookie('fontcolor', fontcolor, 7);
  
  applyPreferences();
}

// Add event listener to form
document.querySelector('form').addEventListener('submit', savePreferences);

// Apply saved preferences when the page loads
window.addEventListener('load', applyPreferences);
