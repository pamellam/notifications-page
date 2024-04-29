const unreadMsg = Array.from(document.querySelectorAll('.unread'));
const notificationCount = document.querySelector('.notification__box span');
const notificationText = document.querySelector('.notification__mark p');

notificationCount.textContent = unreadMsg.length;

// Function to update the notification count
function updateNotificationCount() {
  notificationCount.textContent = unreadMsg.length;
}

// Event listener for each unread message
unreadMsg.forEach((message) => {
  message.addEventListener('click', () => {
    if (message.classList.contains('unread')) {
      // If the message is unread, remove the 'unread' class
      message.classList.remove('unread');
      // Remove the message from the unreadMsg array
      const index = unreadMsg.indexOf(message);
      if (index !== -1) {
        unreadMsg.splice(index, 1);
        updateNotificationCount();
      }
    }
  });
});

// Remove all
notificationText.addEventListener('click', () => {
  unreadMsg.forEach((message) => {
    message.classList.remove('unread');
  });
  notificationCount.textContent = 0;
});
