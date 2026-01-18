// Utilities
function toggleVisibility(node) {
  node.classList.contains('inactive')
    ? node.classList.replace('inactive', 'active')
    : node.classList.replace('active', 'inactive');
}


// Main
const navBtn = document.querySelector('.toggle-active');
const formBtn = document.querySelector('.return-btn');
const veil = document.querySelector('.veil');
const createForm = document.querySelector('.author-form');
const authorsContainer = document.querySelector('.authors-container');

// Create Form toggle
[navBtn, formBtn].forEach(btn => {
  if (!btn) return;
  btn.addEventListener('click', () => [createForm, veil].forEach(toggleVisibility));
});



