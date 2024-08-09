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
        "what is minecraft": "Minecraft is a sandbox video game where players can build, explore, and interact with a 3D world made up of blocks. It offers various modes, including survival and creative, allowing for diverse gameplay experiences.*
        "what's minecraft": "Minecraft is a sandbox video game where players can build, explore, and interact with a 3D world made up of blocks. It offers various modes, including survival and creative, allowing for diverse gameplay experiences."
        "what is the game minecraft about": "Minecraft is a sandbox video game where players can build, explore, and interact with a 3D world made up of blocks. It offers various modes, including survival and creative, allowing for diverse gameplay experiences."
        "what's the game minecraft about": "Minecraft is a sandbox video game where players can build, explore, and interact with a 3D world made up of blocks. It offers various modes, including survival and creative, allowing for diverse gameplay experiences."
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
        // Return response based on formatted message
        return responses[message] || responses["default"];
    }

    function formatMessage(message) {
        // Convert to lowercase and remove punctuation
        return message.toLowerCase().replace(/[\'\"\!\.\,\?]/g, '').trim();
    }
});