// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const chatOutput = document.getElementById('chat-output');
    const sendButton = document.getElementById('send-button');

    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a chatbot, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a great day!",
        "default": "Sorry, I didn't understand that."
    };

    sendButton.addEventListener('click', () => {
        const message = formatMessage(chatInput.value);
        if (message) {
            appendMessage('You', chatInput.value); // Show the original user message
            chatInput.value = '';
            const response = getResponse(message);
            setTimeout(() => appendMessage('Bot', `Bot response to "${chatInput.value}"`), 1000); // Show the formatted response
        }
    });

    function appendMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    function getResponse(message) {
        return responses[message] || responses["default"];
    }

    function formatMessage(message) {
        return message.toLowerCase().replace(/[\'\"\!\.\,\?]/g, '').trim();
    }
});