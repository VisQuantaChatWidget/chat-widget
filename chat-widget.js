document.addEventListener('DOMContentLoaded', () => {
  const chatBubble = document.createElement('div');
  chatBubble.id = 'chat-bubble';
  chatBubble.innerHTML = '💬';
  document.body.appendChild(chatBubble);

  const chatFormContainer = document.createElement('div');
  chatFormContainer.id = 'chat-form-container';
  chatFormContainer.innerHTML = `
    <div id="chat-header">How Can We Help You?<button id="close-chat">×</button></div>
    <div id="text-bubble">Enter your info below and a representative will be right with you.</div>
    <form id="chat-form">
      <input type="text" id="name" name="name" placeholder="Your Name" required>
      <button type="submit">Send Message</button>
    </form>`;
  document.body.appendChild(chatFormContainer);

  const closeChat = document.getElementById('close-chat');
  const chatForm = document.getElementById('chat-form');
  
  chatFormContainer.style.display = 'none';
  chatBubble.style.cssText = `
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #bb162b;
    color: white;
    border-radius: 50%;
    width: 60px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 30px;
    font-weight: bold;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    transition: transform 0.3s ease, background-color 0.3s ease;
  `;

  window.addEventListener('load', () => {
    setTimeout(() => {
      chatBubble.style.display = 'flex';
    }, 3000);
  });

  chatBubble.addEventListener('click', () => {
    chatFormContainer.style.display = chatFormContainer.style.display === 'flex' ? 'none' : 'flex';
  });

  closeChat.addEventListener('click', () => {
    chatFormContainer.style.display = 'none';
  });

  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Form submitted!');
  });
});
