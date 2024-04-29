const unreadMsg = Array.from(document.querySelectorAll('.unread'));
const notificationCount = document.querySelector('.notification__box span');
const notificationText = document.querySelector('.notification__mark p');

notificationCount.textContent = unreadMsg.length;

// Event listener for each unread message
unreadMsg.forEach((message) => {
  message.addEventListener('click', () => {
    message.classList.remove('unread');
    unreadMsg.length--;
    notificationCount.textContent = unreadMsg.length;
  });
});

notificationText.addEventListener('click', () => {
  unreadMsg.forEach((message) => {
    message.classList.remove('unread');

    notificationCount.textContent = 0;
  });
});
