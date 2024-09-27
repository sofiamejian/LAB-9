
function addMessage(userColor, messageText) {
    const messageArea = document.getElementById("message-area");
  
    
    const newMessage = document.createElement("div");
    newMessage.classList.add("message", userColor);
    newMessage.textContent = messageText;
  
   
    messageArea.appendChild(newMessage);
  
    
    messageArea.scrollTop = messageArea.scrollHeight;
  }
  
  
  function handleSendMessage(userInputId, buttonId, userColor) {
    document.getElementById(buttonId).addEventListener("click", function() {
      const messageInput = document.getElementById(userInputId);
      const messageText = messageInput.value.trim();
  
      
      if (messageText !== "") {
        addMessage(userColor, messageText);
  
        
        messageInput.value = "";
      }
    });
  }
  
  
  handleSendMessage("message-input-user1", "send-button-user1", "blue");
  handleSendMessage("message-input-user2", "send-button-user2", "red");
  