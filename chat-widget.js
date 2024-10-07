body, input, textarea, button {
  font-family: 'Helvetica', 'Arial', sans-serif;
}

#chat-bubble {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #bb162b; /* Primary color */
  color: white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 30px;
  font-weight: bold;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  transition: transform 0.3s ease, background-color 0.3s ease;
}

#chat-bubble:hover {
  background-color: #d24c60;
  transform: scale(1.1);
}

#chat-form-container {
  display: none;
  position: fixed;
  bottom: 100px;
  right: 20px;
  width: 350px;
  height: auto;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  flex-direction: column;
  overflow: hidden;
}

#chat-header {
  background: linear-gradient(to right, #bb162b, #d24c60);
  color: white;
  font-size: 18px;
  padding: 20px;
  border-radius: 10px 10px 0 0;
  text-align: center;
}

#close-chat {
  background: none;
  border: none;
  color: white;
  font-size: 20px;
  font-weight: bold;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}

#text-bubble {
  background-color: #f2f4f7;
  padding: 15px;
  margin: 15px;
  border-radius: 0 2rem 2rem 2rem;
  font-size: 14px;
  color: #111828;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  text-align: left;
}

#chat-form {
  padding: 15px;
  margin: 15px;
}

#chat-form input, #chat-form textarea {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
  box-sizing: border-box;
  font-family: 'Helvetica', 'Arial', sans-serif;
}

#chat-form button {
  width: 100%;
  padding: 12px;
  margin: 8px 0;
  background-color: #bb162b;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
}

#chat-form button:hover {
  background-color: #d24c60;
}

#confirmation-bubble {
  background-color: #f2f4f7;
  padding: 15px;
  margin: 10px 20px;
  border-radius: 0 2rem 2rem 2rem;
  font-size: 14px;
  color: #111828;
  display: none;
  text-align: left;
}

#powered-by {
  font-size: 12px;
  text-align: center;
  margin-top: 20px;
}

#powered-by a {
  color: #001D6E;
  text-decoration: none;
}

#powered-by a:hover {
  text-decoration: underline;
}
