// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const chatOutput = document.getElementById('chat-output');
    const sendButton = document.getElementById('send-button');

    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a chatbot, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a great day!",
        "default": "Sorry, I didn't understand that.",
        "what is minecraft": "Minecraft is a sandbox video game where players can build, explore, and interact with a 3D world made up of blocks. It offers various modes, including survival and creative, allowing for diverse gameplay experiences.",
        "whats minecraft": "Minecraft is a sandbox video game where players can build, explore, and interact with a 3D world made up of blocks. It offers various modes, including survival and creative, allowing for diverse gameplay experiences."
    };

    // Event listener for the send button
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

    // Function to append a message to the chat output
    function appendMessage(sender, text) {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
        chatOutput.appendChild(messageElement);
        chatOutput.scrollTop = chatOutput.scrollHeight;
    }

    // Function to get the response based on the message
    function getResponse(message) {
        return responses[message] || responses["default"];
    }

    // Function to format the message
    function formatMessage(message) {
        return message.toLowerCase().replace(/[\'\"\!\.\,\?\s]/g, ' ').trim();
    }
});