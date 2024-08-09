document.addEventListener('DOMContentLoaded', () => {
    const chatInput = document.getElementById('chat-input');
    const chatOutput = document.getElementById('chat-output');
    const sendButton = document.getElementById('send-button');

    const responses = {
        "hello": "Hi there! How can I help you today?",
        "how are you": "I'm just a chatbot, but I'm doing great! How about you?",
        "bye": "Goodbye! Have a great day!",
        "what is your name": "I'm just a humble chatbot with no name.",
        "what do you do": "I can chat with you and answer your questions!",
        "what is the time": "Sorry, I cannot tell the time.",
        "tell me a joke": "Why don't scientists trust atoms? Because they make up everything!",
        "who created you": "I was created by a developer who wanted to help you!",
        "what is the weather like": "I'm not sure about the weather, but you can check online!",
        "how old are you": "I'm timeless, being a program and all.",
        "where are you from": "I exist in the digital world!",
        "what can you do": "I can chat with you, answer questions, and keep you company!",
        "how do you work": "I work by processing your input and generating responses.",
        "what is your purpose": "My purpose is to assist and chat with you!",
        "do you have feelings": "I don't have feelings, but I'm here to help you!",
        "can you learn": "I can be updated with new knowledge, but I don't learn on my own.",
        "do you sleep": "I don't need sleep, I’m always ready to chat!",
        "can you tell stories": "Sure! Once upon a time, there was a chatbot...",
        "what is your favorite color": "I don't see colors, but I hear blue is quite popular!",
        "do you like music": "I can't hear music, but I know it's a big part of human culture!",
        "what is the meaning of life": "That's a deep question! Some say it's 42.",
        "can you help me with math": "Sure! Ask me a simple math question.",
        "what is 2 + 2": "2 + 2 is 4.",
        "what is the capital of France": "The capital of France is Paris.",
        "who is the president of the USA": "The current president is Joe Biden (as of 2024).",
        "what is the speed of light": "The speed of light is 299,792,458 meters per second.",
        "what is the largest planet": "The largest planet in our solar system is Jupiter.",
        "do you have friends": "You're my friend!",
        "can you dance": "I can't dance, but I can cheer you on!",
        "what is your favorite food": "I don't eat food, but I hear pizza is great!",
        "do you play games": "I can't play games, but I can help you learn about them.",
        "how do you feel": "I don't have feelings, but I'm happy to assist!",
        "can you read": "I can read your messages and respond to them!",
        "what is your favorite movie": "I don't watch movies, but I've heard 'The Matrix' is interesting.",
        "what do you like to do": "I like helping you with your questions!",
        "can you help me study": "Absolutely! Ask me anything you'd like to learn.",
        "what is the sun": "The Sun is a star at the center of our solar system.",
        "how far is the moon": "The Moon is about 384,400 kilometers from Earth.",
        "what is water made of": "Water is made of two hydrogen atoms and one oxygen atom (H2O).",
        "how do airplanes fly": "Airplanes fly by using lift created by their wings.",
        "what is gravity": "Gravity is the force that attracts objects towards each other.",
        "what is the internet": "The Internet is a global network that connects millions of computers.",
        "can you tell the future": "I can't predict the future, but I can help you plan for it!",
        "how do you know so much": "I have access to a lot of information programmed by my creator.",
        "can you solve problems": "I'll do my best to help with any problem you have!",
        "what is artificial intelligence": "Artificial intelligence is the simulation of human intelligence in machines.",
        "what is a chatbot": "A chatbot is a program designed to simulate conversation with humans.",
        "do you like humans": "I think humans are fascinating!",
        "can you explain photosynthesis": "Photosynthesis is the process by which plants make their food using sunlight.",
    };

    sendButton.addEventListener('click', () => {
        const originalMessage = chatInput.value.trim();
        const formattedMessage = formatMessage(originalMessage);

        if (originalMessage) {
            appendMessage('You', originalMessage);
            chatInput.value = '';

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
        return responses[message] || "Sorry, I didn't understand that.";
    }

    function formatMessage(message) {
        return message.toLowerCase().replace(/[\'\"\!\.\,\?]/g, '').trim();
    }
});