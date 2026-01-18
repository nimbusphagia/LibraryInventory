function toggleVisibility(node) {
  if (node.classList.contains('inactive')) {
    node.classList.replace('inactive', 'active');
  } else {
    node.classList.replace('active', 'inactive');
  }

}
