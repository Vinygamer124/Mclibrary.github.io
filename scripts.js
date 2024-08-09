// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const chatOutput = document.getElementById('chat-output');
    const sendButton = document.getElementById('send-button');

    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a chatbot, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a great day!",
        "weather": "I'm not sure about the weather, but you can check online!",
        "name": "I'm just a humble chatbot with no name."
    };

    sendButton.addEventListener('click', () => {
        const originalMessage = chatInput.value.trim();
        const formattedMessage = formatMessage(originalMessage);

        if (originalMessage) {
            appendMessage('You', originalMessage); // Show the original user message
            chatInput.value = '';

            // Get and format the response
            const response = getResponse(formattedMessage);
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
        // Example of a simple keyword-based NLP
        if (message.includes("weather")) {
            return responses["weather"];
        } else if (message.includes("name")) {
            return responses["name"];
        } else if (responses[message]) {
            return responses[message];
        } else {
            return "Sorry, I didn't understand that.";
        }
    }

    function formatMessage(message) {
        return message.toLowerCase().replace(/[\'\"\!\.\,\?]/g, '').trim();
    }
});