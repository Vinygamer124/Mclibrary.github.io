document.getElementById('send').addEventListener('click', function() {
    const userInput = document.getElementById('userinput').value.trim();
    if (userInput === '') return;

    // Display user message
    addMessage('user-message', userInput);
    
    // Simulate bot response
    setTimeout(() => {
        const botResponse = getBotResponse(userInput);
        addMessage('bot-message', botResponse);
    }, 1000);

    // Clear input field and keep focus
    document.getElementById('userinput').value = '';
    document.getElementById('userinput').focus();
});

function addMessage(className, message) {
    const messageElement = document.createElement('div');
    messageElement.className = `message ${className}`;
    messageElement.textContent = message;
    document.getElementById('chatlog').appendChild(messageElement);
    
    // Scroll to the bottom of chatlog
    const chatlog = document.getElementById('chatlog');
    chatlog.scrollTop = chatlog.scrollHeight;
}

function getBotResponse(userInput) {
    // Basic bot logic
    if (userInput.toLowerCase().includes('hello')) {
        return 'Hello! How can I help you today?';
    }
    return 'Sorry, I did not understand that.';
}