document.addEventListener('DOMContentLoaded', () => {
  const chatBubble = document.createElement('div');
  chatBubble.id = 'chat-bubble';
  chatBubble.innerHTML = '💬';
  document.body.appendChild(chatBubble);

  const chatFormContainer = document.createElement('div');
  chatFormContainer.id = 'chat-form-container';
  chatFormContainer.innerHTML = `
    <div id="chat-header">How Can We Help You?<button id="close-chat">×</button></div>
    <div id="text-bubble">Enter your info below and any information regarding your vehicle choice and a representative will be right with you.</div>
    <form id="chat-form">
      <input type="text" id="name" name="name" placeholder="Your Name" required>
      <input type="email" id="email" name="email" placeholder="Your Email" required>
      <input type="tel" id="phone" name="phone" placeholder="Your Phone Number" required pattern="^\\+?[1-9]\\d{1,14}$" title="Please enter a valid phone number.">
      <input type="hidden" id="identifier" name="identifier" value="999999999999999999999999">
      <textarea id="message" name="message" placeholder="Your Message or Vehicle Choice" required style="height: 100px;"></textarea>
      <button type="submit">Send Message 👉🏼</button>
      <div id="form-footer">By submitting, you agree to receive SMS or emails. Rates may apply.</div>
    </form>
    <div id="confirmation-bubble">Thanks for your enquiry. One of our authorized representatives will be in touch any minute now. 🏎️</div>
    <div id="powered-by">Powered by <a href="https://visquanta.com/speed-to-lead" target="_blank">VisQuanta</a></div>`;
  document.body.appendChild(chatFormContainer);

  const closeChat = document.getElementById('close-chat');
  const chatForm = document.getElementById('chat-form');
  const textBubble = document.getElementById('text-bubble');
  const confirmationBubble = document.getElementById('confirmation-bubble');
  const chatHeader = document.getElementById('chat-header');

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

  chatFormContainer.style.cssText = `
    position: fixed;
    bottom: 100px;
    right: 20px;
    width: 350px;
    height: auto;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
    z-index: 1000;
    display: flex;
    flex-direction: column;
    overflow: hidden;
  `;

  window.addEventListener('load', () => {
    setTimeout(() => {
      chatBubble.style.display = 'flex';
    }, 3000);
  });

  chatBubble.addEventListener('click', () => {
    if (chatFormContainer.style.display === 'flex') {
      chatFormContainer.style.display = 'none';
    } else {
      chatFormContainer.style.display = 'flex';
    }
  });

  closeChat.addEventListener('click', () => {
    chatFormContainer.style.display = 'none';
  });

  chatForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const submitButton = chatForm.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    submitButton.textContent = 'Sending...';

    const formData = {
      name: document.getElementById('name').value.trim(),
      email: document.getElementById('email').value.trim(),
      phone: document.getElementById('phone').value.trim(),
      message: document.getElementById('message').value.trim(),
      identifier: document.getElementById('identifier').value
    };

    fetch('https://api.visquanta.com/webhook/chat-widget', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Server error');
      }
      return response.json();
    })
    .then(data => {
      chatForm.reset();
      chatForm.style.display = 'none';
      textBubble.style.display = 'none';
      confirmationBubble.style.display = 'block';
      chatHeader.textContent = "All Done! 🏆";
    })
    .catch((error) => {
      console.error('Error:', error);
      submitButton.disabled = false;
      submitButton.textContent = 'Send Message 👉🏼';
      confirmationBubble.style.display = 'block';
      confirmationBubble.textContent = 'There was an error submitting the form. Please try again later.';
    });
  });
});
