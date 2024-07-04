document.addEventListener("DOMContentLoaded", function() {
  // Add a movable object to the page
  const movableObject = document.createElement('div');
  movableObject.classList.add('movable');
  movableObject.textContent = 'Ready to work!';
  document.body.appendChild(movableObject);
});
