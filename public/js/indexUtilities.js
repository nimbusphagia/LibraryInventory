const navBtn = document.querySelector('.toggle-active');
const formBtn = document.querySelector('.return-btn');
const booksContainer = document.querySelector('.books-container');
function toggleActive(elements = []) {
  elements.forEach(e => {
    if (e.classList.contains('inactive')) {
      e.classList.replace('inactive', 'active');
    } else {
      e.classList.replace('active', 'inactive');
    }
  });
}
function enableBtn(btn, selector) {
  if (!btn) return;
  btn.addEventListener('click', () => {
    const elements = document.querySelectorAll(selector);
    console.log(elements);
    toggleActive(elements);
  });
}


enableBtn(formBtn, '.veil, .book-form');
enableBtn(navBtn, '.veil, .book-form');

const modal = document.querySelector(".form-delete");
const veil = document.querySelector(".veil");
const bookIdInput = document.getElementById("form-book-id");
const cancelBtn = document.querySelector(".cancel-delete-btn");

booksContainer.addEventListener("click", (e) => {
  const deleteBtn = e.target.closest(".delete-btn");
  if (!deleteBtn) return;

  const bookId = deleteBtn.dataset.bookId;

  bookIdInput.value = bookId;

  modal.classList.replace("inactive", 'active');
  veil.classList.replace("inactive", 'active');
});

cancelBtn.addEventListener("click", () => {
  modal.classList.replace('active', "inactive");
  veil.classList.replace('active', "inactive");
});


