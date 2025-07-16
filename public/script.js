document.addEventListener('DOMContentLoaded', () => {
    const chatForm = document.getElementById('chat-form');
    const userInput = document.getElementById('user-input');
    const chatContainer = document.getElementById('chat-container');

    chatForm.addEventListener('submit', async (e) => {
        e.preventDefault(); // Prevent the default form submission which reloads the page
        const message = userInput.value.trim();
        if (!message) return;

        // Display user's message in the chat container
        appendMessage(message, 'user');
        userInput.value = ''; // Clear the input field

        try {
            // Here is the fetch() function to call your backend
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                // Send the user's message in the request body
                body: JSON.stringify({ message: message }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            
            // Display the bot's response
            appendMessage(data.response, 'bot');

        } catch (error) {
            console.error('Error fetching chat response:', error);
            appendMessage('Sorry, something went wrong. Please try again.', 'bot');
        }
    });

    function appendMessage(text, sender) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', `${sender}-message`);
        messageElement.textContent = text;
        chatContainer.appendChild(messageElement);
        chatContainer.scrollTop = chatContainer.scrollHeight; // Auto-scroll to the latest message
    }
});