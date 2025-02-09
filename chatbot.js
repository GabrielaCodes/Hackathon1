// chatbot.js

document.getElementById("send-button").addEventListener("click", handleUserMessage);
document.getElementById("user-input").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        handleUserMessage();
    }
});

function handleUserMessage() {
    let userInput = document.getElementById("user-input").value;
    if (userInput.trim() === "") {
        return;
    }
    
    // Display user message
    displayMessage(userInput, 'user');
    
    // Clear the input field
    document.getElementById("user-input").value = "";
    
    // Display chatbot response after a short delay
    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        displayMessage(botResponse, 'bot');
    }, 1000);
}

function displayMessage(message, sender) {
    let messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.innerText = message;
    document.getElementById("chatbox").appendChild(messageElement);
    
    // Scroll chatbox to the bottom to see the new message
    document.getElementById("chatbox").scrollTop = document.getElementById("chatbox").scrollHeight;
}

function getBotResponse(userInput) {
    // Simple bot logic for now (you can expand this later)
    const lowerInput = userInput.toLowerCase();
    
    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
        return "Hello! How can I assist you today?";
    } else if (lowerInput.includes("wheelchair") || lowerInput.includes("accessible")) {
        return "I can help you find wheelchair accessible places in Kerala. Just enter the district in the search box!";
    } else if (lowerInput.includes("thank you")) {
        return "You're welcome! Feel free to ask me anything else.";
    } else {
        return "Sorry, I didn't understand that. Could you please ask something else?";
    }
}
