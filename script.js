function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
  
    if (message !== '') {
      const chatBox = document.getElementById('chat-box');
      const messageElement = document.createElement('div');
      messageElement.textContent = message;
      messageElement.className = 'chat-message';
      chatBox.appendChild(messageElement);
  
      input.value = '';
      chatBox.scrollTop = chatBox.scrollHeight; // scroll to bottom
    }
  }
  