const chatOutput = document.getElementById('chat-output');
const chatInput = document.getElementById('chat-input');

chatInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        const userMessage = chatInput.value;
        addMessage('user', userMessage);
        chatInput.value = '';
        
        // Giả lập câu trả lời của chatbot
        setTimeout(() => {
            addMessage('bot', 'Processing your request...');
            // Thêm hiệu ứng chạy chữ
            setTimeout(() => {
                addMessage('bot', 'Here is the information you need.');
            }, 1000);
        }, 500);
    }
});

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatOutput.appendChild(messageElement);
    
    chatOutput.scrollTop = chatOutput.scrollHeight;
}