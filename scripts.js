document.getElementById('send').addEventListener('click', function() {
    const userInput = document.getElementById('userinput').value;
    if (userInput.trim() === '') return;

    // Display user message
    addMessage('user-message', userInput);
    
    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage('bot-message', botResponse);
    }, 1000);

    document.getElementById('userinput').value = '';
});

function addMessage(className, message) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    document.getElementById('chatlog').appendChild(messageElement);
    document.getElementById('chatlog').scrollTop = document.getElementById('chatlog').scrollHeight;
}

function getBotResponse(userInput) {
    // Basic bot logic
    if (userInput.toLowerCase().includes('hello')) {
        return 'Hello! How can I help you today?';
    }
    return 'Sorry, I did not understand that.';
}