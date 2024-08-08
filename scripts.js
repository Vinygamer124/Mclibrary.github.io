// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const chatOutput = document.getElementById('chat-output');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', () => {
        const message = chatInput.value;
        if (message.trim()) {
            appendMessage('You', message);
            chatInput.value = '';
            simulateBotResponse(message);
        }
    });

    function appendMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    function simulateBotResponse(userMessage) {
        setTimeout(() => {
            const response = `Bot response to "${userMessage}"`; // Simulated response
            appendMessage('Bot', response);
        }, 1000);
    }
});