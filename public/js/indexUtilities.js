// Utilities
function toggleVisibility(node) {
  node.classList.contains('inactive')
    ? node.classList.replace('inactive', 'active')
    : node.classList.replace('active', 'inactive');
}


// Main
const navBtn = document.querySelector('.toggle-active');
const formBtn = document.querySelector('.return-btn');
const createForm = document.querySelector('.book-form');
const booksContainer = document.querySelector('.books-container');
const modal = document.querySelector('.form-delete');
const veil = document.querySelector('.veil');
const bookIdInput = document.getElementById('form-book-id');
const cancelBtn = document.querySelector('.cancel-delete-btn');

// Create Form toggle
[navBtn, formBtn].forEach(btn => {
  if (!btn) return;
  btn.addEventListener('click', () => [createForm, veil].forEach(toggleVisibility));
});


// Delete Form toggle, passing id to form
booksContainer.addEventListener('click', (e) => {
  const deleteBtn = e.target.closest('.delete-btn');
  if (!deleteBtn) return;

  bookIdInput.value = deleteBtn.dataset.bookId;
  [modal, veil].forEach(toggleVisibility);
});

cancelBtn.addEventListener('click', () => {
  [modal, veil].forEach(toggleVisibility);
});

