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
            appendMessage('You', message);
            chatInput.value = '';
            const response = getResponse(message);
            setTimeout(() => appendMessage('Bot', response), 1000);
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
        // Chuyển văn bản thành chữ thường và loại bỏ các ký tự không cần thiết
        return message.toLowerCase().replace(/[\'\"\!\.\,\?]/g, '').trim();
    }
});