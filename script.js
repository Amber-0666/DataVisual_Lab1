// Swaps between the three "pages" (sections) using JavaScript, no page reload.
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll('.page').forEach(function (page) {
    page.classList.remove('active');
  });

  // Show the requested page
  var target = document.getElementById(pageId);
  if (target) {
    target.classList.add('active');
  }

  // Update nav button states so the user can see which page they're on
  document.querySelectorAll('.nav-btn').forEach(function (btn) {
    btn.classList.remove('active');
  });
  var navBtn = document.getElementById('nav-' + pageId);
  if (navBtn) {
    navBtn.classList.add('active');
  }

  // Keep the URL hash in sync so refresh/back-forward roughly works
  window.location.hash = pageId;
}

// On load, check the URL hash to decide which page to show first
document.addEventListener('DOMContentLoaded', function () {
  var validPages = ['home', 'televisions', 'about'];
  var startPage = window.location.hash.replace('#', '');
  if (!validPages.includes(startPage)) {
    startPage = 'home';
  }
  showPage(startPage);

  // Set footer year automatically
  document.getElementById('year').textContent = new Date().getFullYear();
});